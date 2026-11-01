import './sources.css';

import { ISource } from '../../controller/controller';

class Sources {
    public draw(data: ISource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        if (!sourceItemTemp) {
            console.error('Template #sourceItemTemp not found');
            return;
        }

        data.forEach((item: ISource) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const itemName = sourceClone.querySelector('.source__item-name');
            const itemContainer = sourceClone.querySelector('.source__item');

            if (itemName) itemName.textContent = item.name;

            if (itemContainer && item.id) {
                itemContainer.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) sourcesContainer.append(fragment);
    }
}

export default Sources;
