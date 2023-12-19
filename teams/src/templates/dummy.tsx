interface dummy {
    id: number;
    username: string;
    task: string;
    date: any;
}

interface user {
    id: number;
    username: string;
}

interface task {
    id: number;
    task: string;
}
const dummyArray: dummy[] = [
    {
        id: 1,
        username: "John",
        task: "walk",
        date: "10/10/2021",
    },
    {
        id: 2,
        username: "Paul",
        task: "dance",
        date: "11/10/2021",
    },
    {
        id: 3,
        username: "Cat",
        task: "Sleep",
        date: "12/10/2021",
    },
    {
        id: 2,
        username: "Paul",
        task: "dance",
        date: "13/10/2021",
    }

    
];

function separateDummy(dummyArray: dummy[]): { users: user[], tasks: task[] } {
    const users: user[] = [];
    const tasks: task[] = [];

    dummyArray.forEach((item) => {
       
        const User = users.find((user) => user.id === item.id);
        if (!User) {
            users.push({ id: item.id, username: item.username });
        }

        const Task = tasks.find((task) => task.id === item.id);
        if (!Task) {
            tasks.push({ id: item.id, task: item.task });
        }
    });

    return {users, tasks};
}