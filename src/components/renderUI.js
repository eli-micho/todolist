const root = document.querySelector('#root');

const renderSideBar = () => {
    const sidebar = document.createElement('div');
    const logoWrap = document.createElement('div');
    const projectTabWrap = document.createElement('div');

    logoWrap.innerHTML = '<h1>the.List</h1>';
    logoWrap.classList.add('logoWrap');

    projectTabWrap.classList.add('projectTabWrap');
    
    sidebar.classList.add('sidebar');
    sidebar.appendChild(logoWrap);
    sidebar.appendChild(projectTabWrap);
    
    return sidebar
};

const renderMain = (() => {
    const main = document.createElement('div');
    const sidebar = renderSideBar();

    main.classList.add('main');

    main.appendChild(sidebar);
    root.appendChild(main);
})();

export { 
    renderMain
};
