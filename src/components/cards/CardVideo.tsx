import React, { useEffect, useState } from 'react';
import {
   Box,
   Heading,
   Text,
   Stack,
} from '@chakra-ui/react';
import axios from 'axios';

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

const YOUTUBE_PLAYLIST_ID = 'PLtyd7v_I7PGlMekTepCvnf8WMKVR1nhLZ';
const YOUTUBE_API_KEY = 'AIzaSyBU7HfatqTfSS8RxG75BShc-Y7dqC_tli0'; // Replace with your YouTube Data API key

const CardComponentVideo = () => {
   const [videos, setVideos] = useState<Video[]>([]); // Notice the Video[] type here

   useEffect(() => {
      const fetchLatestVideos = async () => {
         try {
            const response = await axios.get(
               `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`
            );
            setVideos(
               response.data.items.map((item: any) => ({
                  id: item.snippet.resourceId.videoId,
                  title: item.snippet.title,
                  description: item.snippet.description,
                  thumbnail: item.snippet.thumbnails.high.url,
               }))
            );
         } catch (error) {
            console.error('Error fetching YouTube playlist:', error);
         }
      };

      fetchLatestVideos();
   }, []);

   return (
      <Box>
         {videos.map((video) => (
            <Box key={video.id} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
               <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                  <iframe
                     width="100%"
                     height="265"
                     src={`https://www.youtube.com/embed/${video.id}`}
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  ></iframe>
               </Box>
               <Stack>
                  <Heading as="h3" fontSize="xl">
                     {video.title}
                  </Heading>
                  <Text>{video.description?.substring(0, 150)}</Text>
               </Stack>
            </Box>
         ))}
      </Box>
   );
};

export default CardComponentVideo;
