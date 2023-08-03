import React from 'react'
import Swal from 'sweetalert2';
import "./ReviewCard.css"
import axios from 'axios';
import path from '../../Config/servAddr';
import { getAllByAltText } from '@testing-library/react';

export default function ReviewCard(props) {

    console.log(props.data);

    const {userName, rating, review } = props.data;
    
    const currentUser = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem(`cartifyUser_${currentUser}`));
    const [profile, setProfile] = React.useState({});

    const getProfile = async() => {
        const response = await axios.get(`${path.local}/user/find/${props.data && props.data.userId}`, {
            headers: {
                Authorization: `bearer ${user.token}`
            }
        }).then(res => {
            console.log("HERE WE GO",res.data);
            setProfile(res.data.profilePicture? res.data.profilePicture : "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png");
        }).catch(err => {
            console.log(err);
        })
    }


    React.useEffect(() => {
        getProfile();
    }, [])

    const getReview = async() => {
        await props.gatherReviews();
    }

    const handleDelete = () => {
        Swal.fire({
            title: 'Delete Review ?',
            text: "Confirm!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then( async (result) => {
            if (result.isConfirmed) {
                const response = await axios.delete(`${path.local}/review`,
        {
          headers: {
            Authorization: `bearer ${user.token}`
          },
          data: {
            productId: props.data.productId,
            userId: user.userId
          }
        }

        
      ).then(res => {
                    console.log(res.data);
                    Swal.fire(
                    'Deleted!',
                    'Your review has been deleted.',
                    'success'
                    )
                    
                    getReview();

                }).catch(err => {
                    console.log(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
                )
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Action Cancelled',
                    text: 'Your review is safe',
                })
            }
        })
    }

  return (

   
        <div class="testimonial-box"
        onClick={() =>{
            if(user.userId == props.data.userId){
                handleDelete();
            }
        }}
        >
          
          <div class="box-top">
             
            
              <div class="profile">
               
                
                  <div class="profile-img">
                      <img src={profile} />
                  </div>
                
                  <div class="name-user">
                      <strong>
                        {
                            userName
                        }
                      </strong>
                      {/* <span>@liammendes</span> */}
                  </div>
              </div>
           
              <div class="reviews">
                
                {
                   Array.apply(null, Array(rating)).map((item, index) => {
                        return <span class="fa fa-star checked"></span>
                    })
                }
                 
              </div>
          </div>
   
          <div class="client-comment">
              <p>
                {
                    review
                }
              </p>
          </div>
      </div>
  )
}
