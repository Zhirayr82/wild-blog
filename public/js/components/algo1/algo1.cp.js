let algo1 = {
  templateUrl: 'js/components/algo1/templateAlgo1.html',
  controller: [function() {

    function friend(friends){
      let array2 = [];
      let array3 = [];
      console.log(friends);

      for(let i = 0; i <=  friends.length -1; i++){
        console.log(friends[i]);
        console.log(friends[i].length);
        if(friends[i].length === 4){
          array3.push(friends[i]); 
          console.log(array3);
        }
      }
      return array3;
    }
    this.names = friend(["Ryan", "Kieran", "Mark"]);
  }
  ]
};


export default algo1;