import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises.jsx';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { _id } = useParams();

// console.log(_id,"line no 16")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      
      // const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      // const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDbUrl = 'https://gymexercisesservices.onrender.com';
      
      // const youtubeSearchUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=despacito&key=AIzaSyCKvYHXH8AoX75aGdlfFe9qmreKOl_xFm0';
      const youtubeSearchUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&key=AIzaSyCKvYHXH8AoX75aGdlfFe9qmreKOl_xFm0&';

      // const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises?id=${id}`, exerciseOptions);
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${_id}`);
      
      console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}q=${exerciseDetailData.name} exercise`);
      // setExerciseVideos(exerciseVideosData.contents);
      console.log(exerciseVideosData.items);
      setExerciseVideos(exerciseVideosData.items);

      // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises?q=${exerciseDetailData.target}`, exerciseOptions);
      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/search/${exerciseDetailData.target}`);
      // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises?q=${exerciseDetailData.equipment}`, exerciseOptions);
      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/search/${exerciseDetailData.equipment}`);
      // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    };
    console.log(exerciseDetail);
    fetchExercisesData();
  }, [_id]);
  console.log(targetMuscleExercises);
  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
