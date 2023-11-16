import React,{useState} from "react";
import styles from "../../../styles/PlaylistSet.module.css";
import ScrollList from "../../common/ScrollList/ScrollList";
import PlaylistItem from "./PlaylistItem";
import { useSelector, useDispatch } from 'react-redux';
import { createPlaylist } from "../../../modules/rootReducer";


const PlaylistSet = ({onSelectedPlaylist}) => {
  const [isDeleteClick, setIsDeleteClick] = useState(false);
  const [isAddClick, setIsAddClick] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [deleteChosenPl, setDeleteChosenPl] = useState(-1);

  const handleDeleteClick = ()=>{
    setIsDeleteClick(prev=>!prev);
  }
  const handleAddClick = () =>{
    setIsAddClick(prev=>!prev);
  }
  const handleDeleteChosenPl = (plId) =>{
    setDeleteChosenPl(plId);
    console.log("삭제클릭:"+plId);
  }
  const handleInputChange = (event) => { //adder-modal에서 입력시
    setUserInput(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // input에 enter쳐도 실행되게 할건데 아직 구현x
    }
  };

  const buttonStyle = {
    fontSize: "20px",
    height: "70%",
    width: "35%",
  };
//TODO
  const dispatch = useDispatch();
  const playlistArray = useSelector((state) => {
    return state.playlists.playlistArray;
  });
  

  return (

    <div className={styles["playlist-set-wrapper"]}>
      {isAddClick&&(//new playlist클릭시 뜨는 창 : adder-modal
        <div className={styles["adder-modal"]}>
          <span>New Playlist</span>
          <div className={styles["search-engine"]}>
            <input
              type="text"
              placeholder="       Enter the name for the New Playlist :)"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className={styles["adder-modal-button-area"]}>
            <button className={styles["confirm-button"]}
              onClick={() => {
                dispatch(createPlaylist({userInput})); //TODO pl 새로만드는 기능
              }}
            >Confirm</button>
            <button className={styles["cancel-button"]}>Cancel</button>
          </div>
        </div>
      )}
      <div className={styles["header"]} />{/*본문*/}
      <div className={styles["playlist-adder"]}>
        <button style={buttonStyle} onClick={handleAddClick}>New Playlist</button>
        <button style={buttonStyle} onClick={handleDeleteClick}>Delete Playlist</button>
      </div>
      <div className={styles["playlist-set"]}>
        <ScrollList>
        {playlistArray.map((playlist) => (
          <div className={styles["playlist-wrapper"]} key={playlist.pid}>
            <PlaylistItem buttonFlag = {isDeleteClick} playlistData={playlist} onSelectedPlaylist={onSelectedPlaylist}/>
          </div>
        ))}
        </ScrollList>
      </div>
    </div>
  );
};

export default PlaylistSet;
