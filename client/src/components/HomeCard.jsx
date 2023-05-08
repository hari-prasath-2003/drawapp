import { Segment, Card, Input, Button } from 'semantic-ui-react'
import AvatharModal from './AvatarModal';
import styles from "./HomeCard.module.css"
const HomeCard = () => {
    return (
        <div className={""}>
            <Segment raised className={styles.segment}>
                <Card className={styles.card}>
                    <Card.Content >
                        <Input icon='user' placeholder='Enter your name' fluid />
                    </Card.Content >
                    <Card.Content >
                        <AvatharModal></AvatharModal>
                    </Card.Content>
                    <Card.Content extra>
                        <Button
                            color='blue'
                            fluid
                        >
                            Create a room
                        </Button>
                    </Card.Content>
                </Card>
            </Segment>
        </div>
    );
}

export default HomeCard;