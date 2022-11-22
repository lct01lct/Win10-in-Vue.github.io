import { App, Component, Ref } from 'vue';
import animation from '@/share/anime';
import { addTaskBarTriggerItem } from './taskBar';
import type { TaskBarTriggerItem } from './taskBar';
import WinApp from '../app';
import installDirective from '@/utils/vue/directives';

export const compMap: Map<string, Component> = new Map();

interface BaseApp {
  _dom: WinAppDOM;
}

export const WIN_APP_SCOPE = '__WIN__APP__SCOPE__';
export type WinAppDOM = HTMLElement & {
  [WIN_APP_SCOPE]: {
    appInstance: BaseApp;
    close: () => void;
    onMinimizeBtnClick: () => void;
    isShow: Ref<boolean>;
  };
};

export interface BaseAppContructorOpt {
  name: string;
  comp: Component;
  icon: string;
}

class BaseApp {
  name: string;
  _logo: string;
  _isRender: boolean = false;

  constructor({ name, comp, icon }: BaseAppContructorOpt) {
    this.name = name;
    this._logo = icon;
    installWinApp(name, comp);
  }

  open() {
    if (!this._isRender) {
      const oContainer = document.createDocumentFragment() as unknown as HTMLElement;
      const vueApp = createApp(compMap.get(this.name)!);
      installDirective(vueApp);

      const zIndex = computed(() => [...compMap.keys()].indexOf(this.name) + 1);
      vueApp.provide('zIndex', zIndex);
      vueApp.provide('appInstance', this);

      vueApp.mount(oContainer);
      const _dom = oContainer.querySelector('.app-wrapper')! as WinAppDOM;
      this._dom = _dom;

      document.querySelector('.deskTop-wrapper')!.appendChild(oContainer);

      initWinAppStyle(_dom, this);
      createWinAppScope(_dom, vueApp, this);
      renderTiggerInTaskBar({
        iconPath: this._logo,
        name: this.name,
        winApp: this as unknown as WinApp,
      });

      this._isRender = true;
    } else {
      this.show(true);
    }
  }

  close() {
    getWinAppScope(this._dom).close();
  }

  show(immediate: boolean = false) {
    this._dom[WIN_APP_SCOPE].isShow.value = true;
    animation({
      targets: this._dom,
      scale: [immediate ? 1 : 0, 1],
      opacity: [0, 1],
      duration: immediate ? 0 : 300,
      begin: async () => {
        await nextTick();
        this._dom.style.transformOrigin = 'bottom left';
      },
      complete: () => {
        this._dom.style.transformOrigin = 'center';
      },
    });
  }

  hide(immediate: boolean = true) {
    if (immediate) {
      this._dom[WIN_APP_SCOPE].isShow.value = false;
    } else {
      this._dom[WIN_APP_SCOPE].onMinimizeBtnClick();
    }
  }
}

const installWinApp = (name: string, comp: Component) => {
  if (compMap.has(name)) {
    throw new Error('${name} already exists!');
  } else {
    compMap.set(name, comp);
  }
};

export const getWinAppScope = (_dom: WinAppDOM) => {
  return _dom[WIN_APP_SCOPE];
};

const initWinAppStyle = async (_dom: WinAppDOM, winApp: BaseApp) => {
  animation({
    targets: _dom,
    scale: [0, 1],
    opacity: [0, 1],
    duration: 300,
  });
};

const createWinAppScope = (_dom: WinAppDOM, vueApp: App<Element>, baseApp: BaseApp) => {
  _dom[WIN_APP_SCOPE] = {
    appInstance: baseApp,
    close: () => {
      vueApp.unmount();
    },
  } as WinAppDOM['__WIN__APP__SCOPE__'];
};

const renderTiggerInTaskBar = (opt: TaskBarTriggerItem) => {
  addTaskBarTriggerItem(opt);
};

export default BaseApp;
