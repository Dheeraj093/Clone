import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvilable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

const Movies = () => {

  const [isScrolled, setIsScrolled] = useState(false)     
  const navigate = useNavigate();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded); 
  const dispatch = useDispatch();
  const movies = useSelector((state)=>state.netflix.movies);
  const genres = useSelector((state)=>state.netflix.genres);

  useEffect(() => {
     dispatch(getGenres());
  }, [])
  
 useEffect(() => {
     if(genresLoaded)
       dispatch(fetchMovies({genres,type:"movie"}));
  },[genresLoaded])

  window.onscroll= ()=>{
     setIsScrolled(window.pageYOffset === 0 ? false:true );
     return () => (window.onscroll == null);
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    //   if(currentUser)
    //     navigate("/");
    })

  return (
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled} />
        </div>
        
        <div className="data" >
        <SelectGenre genres={genres} type="movie" /> 
         { 
            movies.length ? <Slider movies={movies} />:
            <NotAvilable />
         }
        </div>
    </Container>
  )
}

export default Movies 

const Container =styled.div`
    .data{
        margin-top:8rem;
        .not-avilable{
            text-align:center;
            color:white;
            margin-top:4rem;  
        }
    }
`;