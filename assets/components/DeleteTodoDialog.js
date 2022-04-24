Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@peterAK
SanderCokart
/
react-symfony-mui-todoapp
Public
Code
Issues
Pull requests
13
Actions
Projects
Wiki
Security
Insights
react-symfony-mui-todoapp/assets/js/components/DeleteDialog.js /
@SanderCokart
SanderCokart video done about updating an entity
Latest commit 335b9d0 on Feb 14, 2020
History
1 contributor
44 lines (40 sloc)  1.44 KB

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {TodoContext} from '../contexts/TodoContext';

function DeleteDialog(props) {
    const context = useContext(TodoContext);

    const hide = () => {
        props.setDeleteConfirmationIsShown(false);
    };

    return (
        <Dialog onClose={hide} fullWidth={true} maxWidth='sm' open={props.open}>
            <DialogTitle>Are you sure you wish to delete this to-do?</DialogTitle>
            <DialogContent>
                {props.todo.task}
            </DialogContent>
            <DialogActions>
                <Button onClick={hide}>Cancel</Button>
                <Button onClick={() => {
                    context.deleteTodo({id: props.todo.id, task: props.todo.task});
                    hide();
                }}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setDeleteConfirmationIsShown: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        task: PropTypes.string.isRequired,
    }),
};

export default DeleteDialog;