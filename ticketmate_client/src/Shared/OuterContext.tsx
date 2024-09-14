import { createContext, ReactNode } from 'react';
import {User} from '../client/types.gen'

type Project = {
    guid?: string;
    name?: string;
    isActive?: boolean;
};


type Ticket = {
    guid?: string;
    title?: string;
    description?: string;
    statusId?: number;
    priorityId?: number;
};


type DashBoardProps = {
    user: User | null;
    projects: Project[];
    tickets: Ticket[];
}



const OuterContext = createContext<DashBoardProps | undefined>(undefined)



const OuterContextProvider = ({ children }: { children: ReactNode }) => {

    const user: User = {
        guid: "1337",
        phoneNumber: "317-867-5309",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        avatar: "avatarUrl",
        isActive: true
    };

    const projects: Project[] = [];
    const tickets: Ticket[] = [];

    return(
        <OuterContext.Provider value={{user, projects, tickets}}>
            {children}
        </OuterContext.Provider>
    )}

export {OuterContext, OuterContextProvider}
