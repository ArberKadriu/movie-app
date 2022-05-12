import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import ReviewForm from './reviewform';

class Main extends React.Component {
    render() {
        return(
            <div className='card-body bg-secondary'>
            <CardGroup>
                <Card border='primary'>
                    <div className='card-img'>
                    <Card.Img variant="top" src="https://pbs.twimg.com/media/FPqeT1KUYAIEh6i?format=jpg&name=large" />
                    </div>
                    <Card.Body>
                    <Card.Title>Doctor Strange in the Multiverse of Madness</Card.Title>
                    <Card.Text>
                    <p>Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text text-strong">2022 • PG-13 • 2h 6m</small>
                    </Card.Footer>
                    <ReviewForm />
                </Card>
                <Card border='primary'>
                    <div className='card-img'>
                    <Card.Img variant="top" src="https://media-cache.cinematerial.com/p/500x/nt44myfb/the-batman-movie-poster.jpg?v=1643195236" />
                    </div>
                    <Card.Body>
                    <Card.Title>The Batman</Card.Title>
                    <Card.Text>
                    <p>When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text text-strong">2022 • PG-13 • 2h 56m</small>
                    </Card.Footer>
                    <ReviewForm />
                </Card>
                <Card border='primary'>
                    <div className='card-img'>
                    <Card.Img variant="top" src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:231/h:288/q:75/https://bleedingcool.com/wp-content/uploads/2022/03/sonic_the_hedgehog_two_ver23_xlg.jpg" />
                    </div>
                    <Card.Body>
                    <Card.Title>Sonic the Hedgehog 2</Card.Title>
                    <Card.Text>
                    <p>After settling in Green Hills, Sonic is eager to prove that he has what it takes to be a true hero. His test comes when Dr. Robotnik returns with a new partner, Knuckles, in search of a mystical emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text text-strong">2022 • PG • 2h 2m</small>
                    </Card.Footer>
                    <ReviewForm />
                </Card>
                <Card border='primary'>
                    <div className='card-img'>
                    <Card.Img variant="top" src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:231/h:288/q:75/https://bleedingcool.com/wp-content/uploads/2022/03/sonic_the_hedgehog_two_ver23_xlg.jpg" />
                    </div>
                    <Card.Body>
                    <Card.Title>Sonic the Hedgehog 2</Card.Title>
                    <Card.Text>
                    <p>After settling in Green Hills, Sonic is eager to prove that he has what it takes to be a true hero. His test comes when Dr. Robotnik returns with a new partner, Knuckles, in search of a mystical emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.</p>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text text-strong">2022 • PG • 2h 2m</small>
                    </Card.Footer>
                    <ReviewForm />
                </Card>
            </CardGroup>
            </div>
        );
    }
}

export default Main