type FooterProps = {
    title: string, 
    icon : FontAwesomeIcon,
    notificationNumber: number, 
    link: string, 
    hasInput: boolean}

export const footerMenuDatas : FooterProps[] = [
    {
        title: 'Home',
        icon: 'home',
        notificationNumber: -1,
        hasInput : false,
        link : 'homme'
        
    },
    {
        title: 'Recherche',
        icon: 'search',
        notificationNumber: -1,
        hasInput : false,
        link : 'search'
        
    },
    {
        title: 'Ajouter',
        icon: 'plus',
        notificationNumber: -1,
        hasInput : false,
        link : 'add'
        
    },
    {
        title: 'Message',
        icon: 'comment',
        notificationNumber: 2,
        hasInput : false,
        link : 'chat'
        
    },
    {
        title: 'Profil',
        icon: 'user',
        notificationNumber: -1,
        hasInput : false,
        link : 'profil'
        
    }

]