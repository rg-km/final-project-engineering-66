import { Container } from 'react-bootstrap';
import siganteng from './image/Animation1.png';

const OurTeam = () => {
  return (
    <>
      <div className="bg-white spaciberita">
        <div className="tentangkami">
          <h4>
            <b>Our Team</b>
          </h4>
        </div>
        <Container>
          <div className="backlagi rounded-3">
            <div className="kasihjarak ">
              <center>
                <h3 class="fw-bold">F R O N T E N D &nbsp; D E V E L O P E R</h3>
              </center>
              <div className="kasihjarak">
                <center>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card-body">
                          <img src={siganteng} alt="" />
                          <div className="pt-5 ">
                            <a href="#" className="btn btn-warning text-dark ">
                              <b>Nurfaidzy Riyamizard</b>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card-body">
                          <img src={siganteng} alt="" />
                          <div className="pt-5 ">
                            <a href="#" className="btn btn-warning text-dark">
                              <b>Ahmad Farizi</b>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card-body">
                          <img src={siganteng} alt="" />
                          <div className="pt-5 ">
                            <a href="#" className="btn btn-warning text-dark">
                              <b>Dicky Manurung</b>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card-body">
                          <img src={siganteng} alt="" />
                          <div className="pt-5 ">
                            <a href="#" className="btn btn-warning text-dark ">
                              <b>Alya Novita</b>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </Container>
        &nbsp;
        <Container>
          <div className="backlagi rounded-3">
            <div className="kasihjarak ">
              <center>
                <h3 class="fw-bold">B A C K E N D &nbsp; D E V E L O P E R</h3>
              </center>
              <div className="kasihjarak2">
                <center>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card-body">
                          <img src={siganteng} alt="" />
                          <div className="pt-5 ">
                            <a href="#" className="btn btn-warning text-dark">
                              <b>Ario Prima</b>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card-body">
                          <img src={siganteng} alt="" />
                          <div className="pt-5 ">
                            <a href="#" className="btn btn-warning text-dark">
                              <b>Aditya H.S</b>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default OurTeam;
