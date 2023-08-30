'use client'

const ScrollHandler: React.FC<{

}> = ({
  
}) => {

  // const fadeIn:HTMLCollectionOf<Element> = document.getElementsByClassName('fade-in-hidden');
  const fadeIn:Element[] = Array.from(document.getElementsByClassName('fade-in-hidden'));
  const viewHeight: number = window.innerHeight;

  const checkItems = () => {
    for(let i = 0; i < fadeIn.length; i++){
      var currItem = fadeIn[i];
      if(currItem){
        checkItem(currItem);
      }
    }
  }

  const checkItem = (item: Element) => {
    if(item){
      var itemTop = item.getBoundingClientRect().top;
      if ( itemTop > 0 && itemTop < viewHeight){
        item.classList.add("fade-in-shown");
        item.classList.remove("fade-in-hidden");
      }
    }
  }

  const scrollHandler = (e: Event) => {
    checkItems();
  }
  
  checkItems();
  document.onscroll = scrollHandler;

  return(<></>);
}

export default ScrollHandler;
