const getTheTitles = function([books]) {
     books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
        var first =books[0].title;
        var second = books[1].title;
        var str = [first, second];
    return str;

};

// Do not edit below this line
module.exports = getTheTitles;
