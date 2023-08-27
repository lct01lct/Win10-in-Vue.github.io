import { WinApp, checkAppIsFileApp, checkAppisFolderApp, maxAppHeight } from '..';
import { Component } from 'vue';
import {
  DESKTOP_ICON_MARGINX,
  DESKTOP_ICON_MARGINY,
  DESKTOP_ICON_PADDING_TOP,
  DESKTOP_ICON_SIZE,
} from './config';
import { getNewlyPosIdx } from './utils';
import {
  appDeskTopIconConfigList,
  unReactiveDeskTopList,
  deskTopIconList,
  folderAndFileDeskTopIconList,
} from './data';
import { Files, Folder, InitFileOpt, createFile, deskTopData, isFile } from 'model-core';
import { getRandomId } from 'utils';

export interface DeskTopIconItem {
  appInstance: WinApp;
  posIdx: number;
  isFocus: boolean;
  isEditting: boolean;
  displayName: string;
  comp: Component;
}

export interface DeskTopIconOpt {
  reference: WinApp;
  displayName: string;
  icon: string;
  posIdx?: number;
  originFileOrFolder?: Files | Folder;
}
export class DeskTopIcon {
  id = getRandomId();
  displayName: string = '';
  posIdx: number = 0;
  isFocus = false;
  isEditting = false;
  reference: WinApp;
  icon: string;
  originFileOrFolder?: Files | Folder;

  constructor(option: DeskTopIconOpt) {
    this.displayName = option.displayName;
    this.reference = option.reference;
    this.icon = option.icon;
    this.posIdx = (option.posIdx && DeskTopIcon.resolvePosIdx(option.posIdx)) || getNewlyPosIdx();
    this.originFileOrFolder = option.originFileOrFolder;
    unReactiveDeskTopList.push(this);

    if (!checkAppIsFileApp(this.reference) && !checkAppisFolderApp(this.reference)) {
      appDeskTopIconConfigList.push(this);
    }

    return reactive(this) as DeskTopIcon;
  }

  removeDeskTopIcon() {
    if (!checkAppisFolderApp(this.reference) && !checkAppIsFileApp(this.reference)) {
      const index = appDeskTopIconConfigList.findIndex((item) => item === this);
      const unReactiveIndex = unReactiveDeskTopList.findIndex(
        (item) => item.displayName === this.displayName
      );

      if (index > -1 && unReactiveIndex > -1) {
        appDeskTopIconConfigList.splice(index, 1);
        unReactiveDeskTopList.splice(unReactiveIndex, 1);
      }
    }
  }

  static resetDeskTopIcon() {
    deskTopIconList.value.forEach((item) => {
      item.isEditting = false;
      item.isFocus = false;
    });
  }

  static computePosIdx(e: MouseEvent) {
    const deskTopHeight = maxAppHeight;
    const deskTopPaddingTop = DESKTOP_ICON_PADDING_TOP;
    const iconMarginX = DESKTOP_ICON_MARGINX;
    const iconMarginY = DESKTOP_ICON_MARGINY;
    const iconSize = DESKTOP_ICON_SIZE;
    const colMaxCount = Math.floor((deskTopHeight - deskTopPaddingTop) / (iconSize + iconMarginY));
    const minTop = deskTopPaddingTop;
    const maxTop = colMaxCount * (iconMarginX + iconSize);
    const left = e.pageX;
    const top = (e.pageY < minTop ? minTop : e.pageY) > maxTop ? maxTop : e.pageY;
    const rowIndex = Math.floor(left / (iconMarginX + iconSize));
    const colIndex = Math.floor(top / (iconMarginY + iconSize));

    return rowIndex * colMaxCount + colIndex + 1;
  }

  private static resolvePosIdx(posIdx: number) {
    let currIdx = posIdx;
    const arr = unReactiveDeskTopList.sort((a, b) => a.posIdx - b.posIdx);

    for (let item of arr) {
      if (item.posIdx === currIdx) {
        item.posIdx++;
        currIdx++;
      } else if (item.posIdx > currIdx) {
        break;
      }
    }

    return posIdx;
  }
}

export const createFileIconInDeskTop = (fileOption: InitFileOpt, e: MouseEvent) => {
  const newFile = createFile(fileOption, deskTopData);

  const newFileIcon = folderAndFileDeskTopIconList.value.find((item) => {
    return isFile(item.originFileOrFolder) && item.originFileOrFolder.fullName === newFile.fullName;
  })!;
  newFileIcon.posIdx = DeskTopIcon.computePosIdx(e);
  newFileIcon.isEditting = true;
  newFileIcon.isFocus = true;

  return newFileIcon;
};
