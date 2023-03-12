import { Container } from 'react-bootstrap'
import {GridItems} from '../GridItems/GridItems'

export const GridHome = () => {

    return (
        <Container fluid>
            <div className='grid-container' >
                <GridItems/>
            </div>
        </Container>
    )
}
