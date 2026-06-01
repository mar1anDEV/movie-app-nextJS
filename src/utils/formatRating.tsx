

function formatRating(rating: number) {


   const formattedRating = Math.floor(rating / 2 * 10) / 10

  return (

    

    `${formattedRating.toFixed(1)}/5`
  )
}

export default formatRating