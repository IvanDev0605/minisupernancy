class SidebarController {
    constructor(menuData, menuContainer) {
        this.menuData = menuData;
        this.menuContainer = menuContainer;
    }

    init() {
        this.menuData.forEach(menuItem => {
            const menuElement = this.createMenuElement(menuItem);
            this.menuContainer.appendChild(menuElement);
        });
    }

    createMenuElement(menuItem) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'has-icon has-dropdown-icon';

        const iconSpan = document.createElement('span');
        iconSpan.className = 'icon';
        const i = document.createElement('i');
        i.className = `mdi ${menuItem.icon}`;
        iconSpan.appendChild(i);

        const labelSpan = document.createElement('span');
        labelSpan.className = 'menu-item-label';
        labelSpan.textContent = menuItem.label;

        const dropdownIcon = document.createElement('div');
        dropdownIcon.className = 'dropdown-icon';
        const dropdownSpan = document.createElement('span');
        dropdownSpan.className = 'icon';
        const dropdownI = document.createElement('i');
        dropdownI.className = 'mdi mdi-plus';
        dropdownSpan.appendChild(dropdownI);
        dropdownIcon.appendChild(dropdownSpan);

        a.appendChild(iconSpan);
        a.appendChild(labelSpan);
        a.appendChild(dropdownIcon);

        const ul = document.createElement('ul');

        menuItem.subItems.forEach(subItem => {
            const subLi = document.createElement('li');
            const subA = document.createElement('a');
            subA.href = subItem.route;
            subA.textContent = subItem.name;
            subLi.appendChild(subA);
            ul.appendChild(subLi);
        });

        li.appendChild(a);
        li.appendChild(ul);

        return li;
    }

}
