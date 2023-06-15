import React from 'react'

export default function Post(props) {
  return (
    <div className="shadow p-3 bg-light rounded"  >
       <div className="text-success">{props.userId}</div>
       <div>{props.id}</div>
       <div>{props.title}</div>
       <div>{props.body}</div>
    </div>
  )
}
