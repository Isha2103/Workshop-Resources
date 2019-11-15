  
import React, { Component } from "react";


//material ui component
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';



class Blogs extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            achie: [

                {
                    id: 1,
                    title: "Nasa space Challenge",
                    by: "Technojam",
                    date: "Spetember 15, 2019",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                    Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/spaceapps.jpg",
                   


                },

                {
                    id: 2,
                    title: "BootCamp",
                    by: "Ravi",
                    date: "26 August, 2019",
                    Description: "insta lucipher._ hate life coz of breakup.meet me in after life. fav song hellfire",
                    Image:  "https://tj-static.s3.ap-south-1.amazonaws.com/DSC_2591.JPG",
                   
                },

            ]
        }
    }

    render() {



        const achie = this.state.achie;

        console.log(achie);
        return (


            <Container maxWidth="lg">
                <div style={{ marginTop: "30px", marginBottom: "20px", }}>
                    <div >
                    <h2 style={{color:"#23292e",textAlign:"center"}}>
                            Blogs  
                            </h2>
                        <hr style={{
                            maxWidth: "120px",
                            borderWidth: "1px",
                            opacity: "1",
                            marginTop: "25px",
                            marginBottom: "25px",
                            borderColor: "#23292e"
                        }}>

                        </hr>
                        <br></br>

                        <Grid container
                            spacing={3}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                          >

                            {achie.map(achie => (

                                    <Grid item xs={12} sm={3} md={4}>
                                                <Card style={{
                                                    maxHeight: "410px", minHeight: "410px",
                                                    boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                                    borderRadius: "20px",
                                                    
                                                }}>
                                                    
                                                    <CardMedia>

                                                        <img src={achie.Image} width="100%" height="auto" />

                                                    </CardMedia>

                                                    <CardContent>
                                                        <Typography variant="h5"  component="p" style={{fontFamily:"Linotte"}}>
                                                            {achie.title}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardContent style={{marginTop:"-20px"}}>
                                                        <Typography variant="body2" color="textSecondary" component="p" >
                                                            {achie.Description}
                                                        </Typography>
                                                        </CardContent>
                                                  

                                                </Card>
                                    </Grid>

                            ))}

                        </Grid>
                    </div>


                </div>
            </Container>
        );
    }
}


export default Blogs;
