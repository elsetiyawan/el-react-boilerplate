const sortRoute = (routes)=>{
  routes.sort((a,b)=>{
    // console.log(a,b)

    //sort routes first
    if(a.routes && b.component){
      return -1
    }
    if(a.component && b.routes){
      return 1
    }

    //then sort most path which have / first
    const regex = /\//g
    if(a.path.match(regex).length > b.path.match(regex).length){
      return -1
    }
    if(a.path.match(regex).length < b.path.match(regex).length){
      return 1
    }

    return 0
  });

  // console.log(routes)
  return routes
}

export default sortRoute