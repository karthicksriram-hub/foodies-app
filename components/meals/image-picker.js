'use client'
import { useRef, useState } from 'react';
import styles from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({ label,name }) {
    const [pickedIamge,setpickedImage] = useState()
    const imageInputRef=useRef()

    
    function handlePickClick(){
       imageInputRef.current.click();
    }

    function handleImageChange(event){
      const file = event.target.files[0]

        if(!file){
        setPickedImage(null);
        return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
        setpickedImage(fileReader.result)
    }
    
    fileReader.readAsDataURL(file);
    }

    


  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedIamge && <p>No image picked yet</p>}
          {pickedIamge && (
            <Image src={pickedIamge} alt='The picked image' fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          multiple
          />
        <button className={styles.button} type='button' onClick={handlePickClick}>
            Pick an Image
        </button>
      </div>
    </div>
  );
}
