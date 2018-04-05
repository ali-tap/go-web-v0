import GoCollectLogo from '../styles/svg/goCollect.svg';
import GoPosLogo from '../styles/svg/goPos.svg';
import GoSellLogo from '../styles/svg/goSell.svg';

import BillIcon from '../styles/svg/billIcon.svg';
import PayIcon from '../styles/svg/payIcon.svg';
import RepeatIcon from '../styles/svg/repeateIcon.svg';
import SchedIcon from '../styles/svg/schedIcon.svg';
import DraftIcon from '../styles/svg/draftIcon.svg';
import LogoutIcon from '../styles/svg/logoutIcon.svg';
import StateIcon from '../styles/svg/stateIcon.svg';

import userIcon1 from '../styles/img/userIcon1.jpg';
import userIcon2 from '../styles/img/userIcon2.jpg';
import userIcon3 from '../styles/img/userIcon3.jpg';


export const DataController = {

    appsList: [
        {
            appTitle: 'goCollect',
            appDesc: 'Collect Payments',
            appLogo: GoCollectLogo,
            subItems: [
                [
                    {
                        subItemTitle: 'Bills',
                        subItemIcon: BillIcon,
                        separateItem: false
                    },
                    {
                        subItemTitle: 'Payments',
                        subItemIcon: PayIcon,
                        separateItem: false
                    }
                ],
                [
                    {
                        subItemTitle: 'Repeat',
                        subItemIcon: RepeatIcon,
                        separateItem: true
                    }
                ],
                [
                    {
                        subItemTitle: 'Scheduled',
                        subItemIcon: SchedIcon,
                        separateItem: false
                    },
                    {
                        subItemTitle: 'Drafts',
                        subItemIcon: DraftIcon,
                        separateItem: false
                    }
                ]

            ],
            isReg: true
        },
        {
            appTitle: 'goSell',
            appDesc: 'Accept Online Payments',
            appLogo: GoSellLogo,
            subItems: [
                [
                    {
                        subItemTitle: 'Bills',
                        subItemIcon: BillIcon,
                        separateItem: false
                    },
                    {
                        subItemTitle: 'Payments',
                        subItemIcon: PayIcon,
                        separateItem: false
                    }
                ],
                [
                    {
                        subItemTitle: 'Repeat',
                        subItemIcon: RepeatIcon,
                        separateItem: true
                    }
                ]
            ],
            isReg: true
        },
        {
            appTitle: 'goTap',
            appDesc: 'Accept Retail Payments',
            appLogo: GoPosLogo,
            subItems: [
                [
                    {
                        subItemTitle: 'Bills',
                        subItemIcon: BillIcon,
                        separateItem: false
                    },
                    {
                        subItemTitle: 'Payments',
                        subItemIcon: PayIcon,
                        separateItem: false
                    }
                ],
                [
                    {
                        subItemTitle: 'Repeat',
                        subItemIcon: RepeatIcon,
                        separateItem: true
                    }
                ],
                [
                    {
                        subItemTitle: 'Scheduled',
                        subItemIcon: SchedIcon,
                        separateItem: false
                    }
                ]
            ],
            isReg: false
        }
    ],
    constItems: [
        {
            constItemIcon: StateIcon,
            constItemTitle: 'Statement',
            constItemDesc: ''
        },
        {
            constItemIcon: LogoutIcon,
            constItemTitle: 'Logout',
            constItemDesc: 'We will miss you'
        }
    ],
    headerInfo: {
        fillPercent: '50%',
        userImg: 'https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png',
        fillRequiredInfo: true
    }

};

export const AccountData = [

    {
        title: 'Payer',
        tabItems: [
            {
                tabItemTitle: 'email1@email.com',
                tabSubItems: [
                    {
                        subItemIcon: userIcon1,
                        subItemTitle: 'Business no. 1'
                    }
                ]
            },
            {
                tabItemTitle: 'email2@email.com',
                tabSubItems: [
                    {
                        subItemIcon: userIcon2,
                        subItemTitle: 'Business no. 1'
                    },
                    {
                        subItemIcon: userIcon2,
                        subItemTitle: 'Business no. 2'
                    },
                    {
                        subItemIcon: userIcon2,
                        subItemTitle: 'Business no. 3'
                    }
                ]
            },
            {
                tabItemTitle: 'email3@email.com',
                tabSubItems: [
                    {
                        subItemIcon: userIcon3,
                        subItemTitle: 'Business no. 1'
                    },
                    {
                        subItemIcon: userIcon3,
                        subItemTitle: 'Business no. 2'
                    },
                    {
                        subItemIcon: userIcon3,
                        subItemTitle: 'Business no. 3'
                    }
                ]
            },
        ]
    },
    {
        title: 'Seller',
        tabItems: [
            {
                tabItemTitle: 'email1@seller.com',
                tabSubItems: [
                    {
                        subItemIcon: userIcon1,
                        subItemTitle: 'Business no. 1'
                    },
                    {
                        subItemIcon: userIcon1,
                        subItemTitle: 'Business no. 2'
                    },
                    {
                        subItemIcon: userIcon1,
                        subItemTitle: 'Business no. 3'
                    }
                ]
            },
            {
                tabItemTitle: 'email2@seller.com',
                tabSubItems: [
                    {
                        subItemIcon: userIcon2,
                        subItemTitle: 'Business no. 1'
                    },
                    {
                        subItemIcon: userIcon2,
                        subItemTitle: 'Business no. 2'
                    },
                    {
                        subItemIcon: userIcon2,
                        subItemTitle: 'Business no. 3'
                    }
                ]
            },
            {
                tabItemTitle: 'email3@seller.com',
                tabSubItems: [
                    {
                        subItemIcon: userIcon3,
                        subItemTitle: 'Business no. 1'
                    },
                    {
                        subItemIcon: userIcon3,
                        subItemTitle: 'Business no. 2'
                    },
                    {
                        subItemIcon: userIcon3,
                        subItemTitle: 'Business no. 3'
                    }
                ]
            },
        ]
    }
];
