

const Scrolling = () => {



    
let $tickerWrapper = $(".tickerwrapper");
let $list = $tickerWrapper.find("ul.list");
let $clonedList = $list.clone();
let listWidth = 10;

$list.find("li").each(function (i) {
			listWidth += $(this, i).outerWidth(true);
});

let endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
	"width" : listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
let infinite = new TimelineMax({repeat: -1, paused: true});
let time = 40;

infinite
  .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
  .set($list, {force3D:true, rotation:0.01, x: listWidth})
  .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
  .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
  .progress(1).progress(0)
  .play();

//Pause/Play		
$tickerWrapper.on("mouseenter", function(){
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});
  return (
    <>
    <div class="tickerwrapper">
   <ul class='list'>
      <li class='listitem'>
        <span>This is list item 1</span>
      </li>
      <li class='listitem'>
        <span>This is list item 2</span>
      </li>
      <li class='listitem'>
        <span>This is list item 3</span>
      </li>
      <li class='listitem'>
        <span>This is list item 4</span>
      </li>
      <li class='listitem'>
        <span>This is list item 5</span>
      </li>
      <li class='listitem'>
        <span>This is list item 1</span>
      </li>
      <li class='listitem'>
        <span>This is list item 2</span>
      </li>
      <li class='listitem'>
        <span>This is list item 3</span>
      </li>
      <li class='listitem'>
        <span>This is list item 4</span>
      </li>
      <li class='listitem'>
        <span>This is list item 5</span>
      </li>
     <li class='listitem'>
        <span>This is list item 1</span>
      </li>
      <li class='listitem'>
        <span>This is list item 2</span>
      </li>
      <li class='listitem'>
        <span>This is list item 3</span>
      </li>
      <li class='listitem'>
        <span>This is list item 4</span>
      </li>
      <li class='listitem'>
        <span>This is list item 5</span>
      </li>
  </ul>
</div>
    </>
  )
}

export default Scrolling