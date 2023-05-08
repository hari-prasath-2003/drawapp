import { useState } from 'react';
import { Modal, Button } from 'semantic-ui-react'
import styles from "./AvatharModal.module.css"
const AvatharModal = () => {
    const [open, setOpen] = useState(false)

    return (
        <Modal
            className={styles.modal}
            onClose={() => { setOpen(false) }}
            onOpen={() => { setOpen(true) }}
            open={open}
            trigger={
                <Button
                    className={styles.trigger}
                >
                </Button>
            }
        >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>

            </Modal.Content>
            <Modal.Actions>
                <Button
                    content="Save Avatar"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => { }}
                    positive
                />
            </Modal.Actions>
        </Modal>
    );
}

export default AvatharModal;