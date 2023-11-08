import executive from '../../../assets/executive.png'
import groupteams from '../../../assets/groupteams.png'

export const drawerData = [
    {
        ID: "1",
        name: "Executive Dashboard",
        icon: executive,
        route: "/dashboard",
        isExpanded: false,
    },
    {
        ID: "2",
        name: "Teams",
        icon: groupteams,
        route: "/teams",
        isExpanded: false,
    },
    {
        ID: "3",
        name: "Developers",
        icon: groupteams,
        route: "/developers",
        isExpanded: false,
    },
    {
        ID: "4",
        name: "Management",
        icon: groupteams,
        // route: "/temas",
        isExpanded: false,
    },
    {
        ID: "4_1",
        categoryId: "4",
        name: "Reports",
        icon: groupteams,
        route: "/management/reports",
        isExpanded: false,
    },
    {
        ID: "4_2",
        categoryId: "4",
        name: "Attendance",
        icon: groupteams,
        route: "/management/attendance",
        isExpanded: false,
    },
]
export const drawerIcons = [
    {
        ID: "1",
        name: "",
        icon: executive,

    },
    {
        ID: "2",
        name: "",
        icon: groupteams,

    },
    {
        ID: "3",
        name: "",
        icon: groupteams,

    },
    {
        ID: "4",
        name: "",
        icon: groupteams,

    },
    {
        ID: "4_1",

        name: "",
        icon: groupteams,

    },
]



