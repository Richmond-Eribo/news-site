"use client"

const Consolelog = ({data}: {data: any}) => {
  return (
    <div>
      <>{console.log(data)}</>
    </div>
  )
}

export default Consolelog
