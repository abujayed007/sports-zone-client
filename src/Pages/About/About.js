import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div class="card mb-3 p-5">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/221218184732-messi-wc-trophy.jpg?c=16x9&q=h_270,w_480,c_fill" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Argentina's Lionel Messi breaks World Cup appearance record with 26th game in final vs. France</h5>
                            <p class="card-text">Argentina's Lionel Messi has broken the record for most appearances at the World Cup, playing in his 26th game in the competition in Sunday's final win over France on penalties.
                                <br />
                                Messi scored twice at the Lusail Stadium in Doha, Qatar, en route to his first World Cup title with Argentina and surpassed the previous record of 25 appearances held by Germany's Lothar Matthaus in the process.</p>
                        </div>
                        <Link to='/sports' className='btn bg-info text-dark ms-3'>See All</Link>
                    </div>
                </div>
            </div>
            <div class="card mb-3 p-5">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1218%2Fr1108418_1296x729_16%2D9.jpg&w=570&format=jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">World Cup Best XIs: ESPN analysts from Qatar 2022 name their teams of the tournament</h5>
                            <p class="card-text">Amrabat, Hakimi and Gvardiol were absolute revelations, Kovacic was Croatia's motor (which, given their circumstances, gave him the slightest of edges over the also excellent Jude Bellingham) and Griezmann was probably the player of the tournament going into the final.
                                <br />
                                Up top, it's largely the superstars we all know and love, but while I suspect some think Olivier Giroud should be here, too, I saw his final as sort of the reverse of the situation at goalkeeper: Martinez's play in the championship match got him onto this list while Giroud's (deserved) early departure in the showpiece dropped him off.</p>
                        </div>
                        <Link to='/sports' className='btn bg-info text-dark ms-3'>See All</Link>
                    </div>
                </div>
            </div>
            <div class="card mb-3 p-5">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://phantom-marca.unidadeditorial.es/253b1a41be68865112d9676667e90b35/resize/1320/f/jpg/assets/multimedia/imagenes/2022/11/30/16697793340282.jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">LIVE Transfer Talk: Cristiano Ronaldo close to Saudi Arabia move with Chelsea, Sporting silent</h5>
                            <p class="card-text">It is reported that the 37-year-old striker has not heard anything from Chelsea or Sporting CP in recent weeks, and the latest reveals that despite his intentions to remain in Europe, he is now more open to making the switch to the Saudi Pro League.
                                <br />
                                Ronaldo initially wanted to join a team that could provide him with top-level European football after being released from Manchester United last month, but with the trail into the Champions League going cold, Al Nassr have been able to capitalise on the situation with a three-year proposal worth €200 million per season.</p>
                        </div>
                        <Link to='/sports' className='btn bg-info text-dark ms-3'>See All</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;