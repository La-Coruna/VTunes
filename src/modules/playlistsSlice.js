import { createSlice } from '@reduxjs/toolkit';
import Playlist from '../domain/Playlist';

//임시파일
const oneplaylistSample = {
        pid: 1,
        numberOfMusic: 3,
        playlistName: "플레이리스트2",
        musics:
        [
          {
            musicId: 1,
            musicName: "신영현",
            lyrics: "는 인생이 예술이어야 한다",
            artist: "김영현",
            albumTitle: "음잘알 앨범",
            duration: "2:23",
            sourceOfPath: "/images/newjeans.gif",
          },
          {
            musicId: 2,
            musicName: "영현신",
            lyrics: "는 인생이 예술이어야 한다2",
            artist: "김영현2",
            albumTitle: "음잘알 앨범2",
            duration: "2:23",
            sourceOfPath: "/images/baby.jpg",
          },        
          {
            musicId: 3,
            musicName: "나는신인가",
            lyrics: "는 인생이 예술이어야 한다2",
            artist: "김영현2",
            albumTitle: "음잘알 앨범2",
            duration: "2:23",
            sourceOfPath: "/images/baby.jpg",
          },
        ]
      };

//임시파일
const playlistsSample = [
      {
        pid: 0,
        numberOfMusic: 2,
        playlistName: "플레이리스트1",
        musics: 
        [
          {
            musicId: 1,
            musicName: "갓영현",
            lyrics: "는 인생이 예술이어야 한다",
            artist: "김영현",
            albumTitle: "음잘알 앨범",
            duration: "2:23",
            sourceOfPath: "/images/newjeans.gif",
          },
          {
            musicId: 2,
            musicName: "짱영현",
            lyrics: "는 인생이 예술이어야 한다2",
            artist: "김영현2",
            albumTitle: "음잘알 앨범2",
            duration: "2:23",
            sourceOfPath: "/images/baby.jpg",
          },
        ],
      },
      {
        pid: 1,
        numberOfMusic: 3,
        playlistName: "플레이리스트2",
        musics:
        [
          {
            musicId: 1,
            musicName: "신영현",
            lyrics: "는 인생이 예술이어야 한다",
            artist: "김영현",
            albumTitle: "음잘알 앨범",
            duration: "2:23",
            sourceOfPath: "/images/newjeans.gif",
          },
          {
            musicId: 2,
            musicName: "영현신",
            lyrics: "는 인생이 예술이어야 한다2",
            artist: "김영현2",
            albumTitle: "음잘알 앨범2",
            duration: "2:23",
            sourceOfPath: "/images/baby.jpg",
          },        
          {
            musicId: 3,
            musicName: "나는신인가",
            lyrics: "는 인생이 예술이어야 한다2",
            artist: "김영현2",
            albumTitle: "음잘알 앨범2",
            duration: "2:23",
            sourceOfPath: "/images/baby.jpg",
          },
        ]
      }
    ];

  //TODO 플레이리스트s기 이름이랑 최종 재생시간만 담고 있을지, 아니면 안에있는 playlist들의 내용 다 갖고 있을지
  const playlistsSlice = createSlice({
    name: 'playlistsSlice',
    //initialState: { playlistArray: [] },
    initialState: { playlistArray: playlistsSample },
    reducers: {
        createPlaylist: (state, action) => { //action.payload는 추가할 playlist의 이름.
        //TODO 같은 이름 플레이리스트 못하게?
        //const newPlaylist = new Playlist(action.payload,{});
        const newPlaylist = oneplaylistSample;
        newPlaylist.pid = state.playlistArray.length;
        state.playlistArray = state.playlistArray.push(newPlaylist); //왜 추가가 안될까..?
//        console.log(state.playlistArray);
      },
      deletePlaylist: (state, action) => { //action.payload는 삭제할 요소의 인덱스
        state.playlistArray = state.playlistArray.splice(action.payload,1);
      },
      update: (state, action) => {
        console.log("playlists 업데이트"); // playlist가 수정되면 이름이나 구성 곡 바뀔 수 있으니 ㅇㅇ.
      },
    },
  });

export default playlistsSlice;
  