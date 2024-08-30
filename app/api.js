'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Api = () => {

const [api, setApi] = useState()

    useEffect(()=>{
        const  get = async () => {
          const resopnse = await axios.get('https://jsonplaceholder.typicode.com/posts')
          setApi(resopnse.data)
        }
        get()
      },[])
    return (
        <div>
            {
               api ? api.map((data, index)=>(
                <div key={index}>
                    <h2 className='m-4 bg-gray-200'>{data.title}</h2>
                </div>
               ))
               : ''
            }
        </div>
    );
}

export default Api;
