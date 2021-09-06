import { Readable, Writable, writable } from 'svelte/store';
import type { PopupContent } from './PopupContent';

class PopupContentServiceInit {
  #contents: Writable<PopupContent[]> = writable([]);

  get contents(): Readable<PopupContent[]> {
    return this.#contents;
  }

  addContent(content: PopupContent) {
    this.#contents.update((it) => [...it, content]);
  }

  removeContent(content: PopupContent) {}
}
export const PopupContentService = new PopupContentServiceInit();
