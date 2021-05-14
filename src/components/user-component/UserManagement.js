import React, {useContext} from 'react';
import {UserDetailsContext} from "@bit/davlac.manage-items.userdetails";
import {CustomSnackBar, SnakeBarContext, SnakeBarLevel} from "@bit/davlac.manage-items.snakebar";
import {ContainerStyled} from "./UserManagement.styled";

export const UserManagement = () => {
    const ctxUser = useContext(UserDetailsContext);
    const ctxSnake = useContext(SnakeBarContext);

    const displaySnake = () => {
        return <CustomSnackBar level={SnakeBarLevel.SUCCESS}
                               message={'Welcome in User component'}
                               openSnakeBar={ctxSnake.openSnakeBar}
                               handleClose={ctxSnake.handleClose}/>
    }

    return (
        <ContainerStyled>
            <h1>User management microfrontend</h1>
            <p>Hello {JSON.stringify(ctxUser.userDetails)} !</p>
            {displaySnake()}
        </ContainerStyled>
    );
}
