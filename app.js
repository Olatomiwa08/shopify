// Your javascript goes here
function toggleMenu(){
  let user = document.getElementById('usertoggle')
  let closeMenu = document.querySelector('.store')
  user.addEventListener('click', ()=>{
    user.classList.toggle('focus')
    closeMenu.classList.toggle('openMenu')
   
    closeMenutwo.classList.remove('openMenu')
    
    // toggleButton.style.display = 'none'
  })
  let collectionContent = document.getElementById('collectionContent')
  collectionContent.addEventListener('click', ()=>{
    closeMenu.classList.remove('openMenu')
  })
  let toggleButton = document.querySelector('.toggleButton')
  let closeMenutwo = document.querySelector('.notification')
  toggleButton.addEventListener('click', ()=>{
    toggleButton.classList.toggle('focus')
    closeMenutwo.classList.toggle('openMenu')
    closeMenu.classList.remove('openMenu')
    closeMenutwo.ariaLabel = "notification"
  }) 
}
function closePlan(){
  let closeContent = document.getElementById('plan')
  closeContent.classList.add('close')
  console.log(closeContent)

}
function toggleAccordion() {
  let toggle = document.getElementById('toggle')
  toggle.classList.toggle('transform')
  var summary = document.getElementById('dropdown-content');
  summary.classList.toggle('show');
  toggle.classList.toggle('focustoggle')
}


function toggleAccordionItem(header) {
  var content = header.nextElementSibling;
  var accordionItem = header.parentNode;

  // Remove 'active' class from all accordion items
  var allAccordionItems = document.querySelectorAll(".accordion-item");
  allAccordionItems.forEach(function (item) {
    if (item !== accordionItem) {
      item.querySelector(".accordion-item-content").classList.remove("active");
      item.classList.remove("active-bg");
    }
  });

  // Toggle 'active' class for the clicked accordion item
  content.classList.add("active");
  accordionItem.classList.add("active-bg");
}



let count = document.getElementById('count')
let progressBar = document.getElementById('myProgressBar')

const createCounter = () => {
    let countTracker = 0
    
    return {
      getCount: () => countTracker,
      increment: () => {
        countTracker++;
      },
      decrement: () => {
        countTracker--;
      },
      reset: () => {
        countTracker = 0;
      }
    }
  }

  const counter = createCounter()
  count.innerHTML = counter.getCount().toString()

function handleChange(){
    counter.increment()
    count.innerHTML = counter.getCount().toString()
    handleProgressBar(counter.getCount())
}

function reverseChange(){

    if (counter.getCount() > 0){
    counter.decrement()
    count.innerHTML = counter.getCount().toString()
    handleProgressBar(counter.getCount())
    }
}

function handleProgressBar(count){
    if(count == 1){
        progressBar.style.width = 'Two0%'
    }
    else if(count == 2){
        progressBar.style.width = '40%'
    }
    else if(count == 3){
        progressBar.style.width = '60%'
    }
    else if(count == 4){
        progressBar.style.width = '80%'
    }
    else if (count == 1){
        progressBar.style.width = '100%'
    }
    else {
        progressBar.style.width = '0%'
    }
}


// let search = document.getElementById('adminsearch')
// search.addEventListener('keydown', function(event){
//   if(event.key === "")
// })

toggleMenu()





function check(){
  const itemcheckbox =document.querySelector('#itemcheckbox')
  const notChecked = document.querySelector('#not-checked')
  const svgChecked = document.querySelector('#svgchecked')
  const loading = document.querySelector('#loading')
  const status = document.getElementById('status')
  const hidden = "hidden"
  const checked_class = 'checkedDone'


  function handleChecked(){
    notChecked.classList.add(hidden)
    loading.classList.remove(hidden)
    status.ariaLabel = 'loading please wait...'
    setTimeout(() =>{
      loading.classList.add(hidden)
      svgChecked.classList.remove(hidden)
      // itemcheckbox.ariaLabel = itemcheckbox.ariaLabel.replace('as Customised', 'as not Customized')
      itemcheckbox.ariaLabel = 'Mark Customize your online store as  Customized'
      status.ariaLabel = 'successful'
      itemcheckbox.classList.add(checked_class)
    },3000)
  }
  function handleNot(){
    svgChecked.classList.add(hidden)
    loading.classList.remove(hidden)
    status.ariaLabel = 'loading please wait...'
    setTimeout(() =>{
      loading.classList.add(hidden)
      notChecked.classList.remove(hidden)
      // itemcheckbox.ariaLabel = itemcheckbox.ariaLabel.replace('as not Customised', 'as  Customized')
      itemcheckbox.ariaLabel = 'Marked Customize your online store as not Customized'
      status.ariaLabel = 'successfully unchecked'
      itemcheckbox.classList.remove(checked_class)
    },3000)
  }

  function handleCheckedorNot(){
    const checked = itemcheckbox.classList.contains(checked_class)

    if(checked){
      handleNot()
    }else{
      handleChecked()
    }
  }

  itemcheckbox.addEventListener('click', handleCheckedorNot)
}


check()

function checkTwo(){
  const itemcheckboxTwo =document.querySelector('#itemcheckboxTwo')
  const notCheckedTwo = document.querySelector('#not-checkedTwo')
  const svgCheckedTwo = document.querySelector('#svgcheckedTwo')
  const loadingTwo = document.querySelector('#loadingTwo')
  const hidden = "hidden"
  const checked_class = 'checkedDone'


  function handleChecked(){
    notCheckedTwo.classList.add(hidden)
    loadingTwo.classList.remove(hidden)
    setTimeout(() =>{
      loadingTwo.classList.add(hidden)
      svgCheckedTwo.classList.remove(hidden)

      itemcheckboxTwo.classList.add(checked_class)
    },3000)
  }
  function handleNot(){
    svgCheckedTwo.classList.add(hidden)
    loadingTwo.classList.remove(hidden)
    setTimeout(() =>{
      loadingTwo.classList.add(hidden)
      notCheckedTwo.classList.remove(hidden)
      itemcheckboxTwo.classList.remove(checked_class)
    },3000)
  }

  function handleCheckedorNot(){
    const checked = itemcheckboxTwo.classList.contains(checked_class)

    if(checked){
      handleNot()
    }else{
      handleChecked()
    }
  }

  itemcheckboxTwo.addEventListener('click', handleCheckedorNot)
  // console.log('rktgnrg')
}
checkTwo()
function check3(){
  const itemcheckbox3 =document.querySelector('#itemcheckbox3')
  const notChecked3 = document.querySelector('#not-checked3')
  const svgChecked3 = document.querySelector('#svgchecked3')
  const loading3 = document.querySelector('#loading3')
  const hidden = "hidden"
  const checked_class = 'checkedDone'


  function handleChecked(){
    notChecked3.classList.add(hidden)
    loading3.classList.remove(hidden)
    setTimeout(() =>{
      loading3.classList.add(hidden)
      svgChecked3.classList.remove(hidden)

      itemcheckbox3.classList.add(checked_class)
    },3000)
  }
  function handleNot(){
    svgChecked3.classList.add(hidden)
    loading3.classList.remove(hidden)
    setTimeout(() =>{
      loading3.classList.add(hidden)
      notChecked3.classList.remove(hidden)
      itemcheckbox3.classList.remove(checked_class)
    },3000)
  }

  function handleCheckedorNot(){
    const checked = itemcheckbox3.classList.contains(checked_class)

    if(checked){
      handleNot()
    }else{
      handleChecked()
    }
  }

  itemcheckbox3.addEventListener('click', handleCheckedorNot)
}
check3()
function check4(){
  const itemcheckbox4 =document.querySelector('#itemcheckbox4')
  const notChecked4 = document.querySelector('#not-checked4')
  const svgChecked4 = document.querySelector('#svgchecked4')
  const loading4 = document.querySelector('#loading4')
  const hidden = "hidden"
  const checked_class = 'checkedDone'


  function handleChecked(){
    notChecked4.classList.add(hidden)
    loading4.classList.remove(hidden)
    setTimeout(() =>{
      loading4.classList.add(hidden)
      svgChecked4.classList.remove(hidden)

      itemcheckbox4.classList.add(checked_class)
    },3000)
  }
  function handleNot(){
    svgChecked4.classList.add(hidden)
    loading4.classList.remove(hidden)
    setTimeout(() =>{
      loading4.classList.add(hidden)
      notChecked4.classList.remove(hidden)
      itemcheckbox4.classList.remove(checked_class)
    },3000)
  }

  function handleCheckedorNot(){
    const checked = itemcheckbox4.classList.contains(checked_class)

    if(checked){
      handleNot()
    }else{
      handleChecked()
    }
  }

  itemcheckbox4.addEventListener('click', handleCheckedorNot)
}
check4()
function check1(){
  const itemcheckbox1 =document.querySelector('#itemcheckbox1')
  const notChecked1 = document.querySelector('#not-checked1')
  const svgChecked1 = document.querySelector('#svgchecked1')
  const loading1 = document.querySelector('#loading1')
  const hidden = "hidden"
  const checked_class = 'checkedDone'


  function handleChecked(){
    notChecked1.classList.add(hidden)
    loading1.classList.remove(hidden)

    setTimeout(() =>{
      loading1.classList.add(hidden)
      
      svgChecked1.classList.remove(hidden)

      itemcheckbox1.classList.add(checked_class)
    },3000)
  }
  function handleNot(){
    svgChecked1.classList.add(hidden)
    loading1.classList.remove(hidden)
    setTimeout(() =>{
      loading1.classList.add(hidden)
      notChecked1.classList.remove(hidden)
      itemcheckbox1.classList.remove(checked_class)
    },3000)
  }

  function handleCheckedorNot(){
    const checked = itemcheckbox1.classList.contains(checked_class)

    if(checked){
      handleNot()
    }else{
      handleChecked()
    }
  }

  itemcheckbox1.addEventListener('click', handleCheckedorNot)
}
check1()









// const optionCheckBox = Array.from(
//   document.querySelectorAll(".option-checkbox")
// );
// const notCheckedIcon = Array.from(
//   document.querySelectorAll(".not-checked-icon")
// );
// const loadingIcon = Array.from(
//   document.querySelectorAll(".check-loading-icon")
// );
// const checkedIcon = Array.from(document.querySelectorAll(".checked-icon"));


// const delay = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const markAsChecked = async (index) => {
//   notCheckedIcon[index].classList.add("hidden");
//   loadingIcon[index].classList.remove("hidden");

//   await delay(Two000);
//   checkedIcon[index].classList.remove("hidden");
//   loadingIcon[index].classList.add("hidden");
//   optionCheckBox[index].classList.add("checked");
// };

// const markAsNotChecked = async (index) => {
//   loadingIcon[index].classList.remove("hidden");
//   checkedIcon[index].classList.add("hidden");
//   await delay(Two000);
//   loadingIcon[index].classList.add("hidden");
//   notCheckedIcon[index].classList.remove("hidden");
//   optionCheckBox[index].classList.remove("checked");
// };

// const isChecked = (elem) => {
//   return elem.classList.contains("checked");
// };

// const handleOnboardingCheck = async (index) => {
//   if (!isChecked(optionCheckBox[index])) {
//     await markAsChecked(index);
//   } else {
//     await markAsNotChecked(index);
//   }
// };


window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  // Add a click event handler to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabs);
  });

  // Enable arrow navigation between tabs in the tab list
  let tabFocus = 0;

  tabList.addEventListener("keydown", (e) => {
    // Move right
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.key === "ArrowRight") {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.key === "ArrowLeft") {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });
});

function changeTabs(e) {
  const target = e.target;
  const parent = target.parentNode;
  const grandparent = parent.parentNode;

  // Remove all current selected tabs
  parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach((t) => t.setAttribute("aria-selected", false));

  // Set this tab as selected
  target.setAttribute("aria-selected", true);

  // Hide all tab panels
  grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach((p) => p.setAttribute("hidden", true));

  // Show the selected panel
  grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}


const container = document.querySelector("#tabsContainer");
const tabList = container.querySelector('[role="tablist"]');
const tabUnderline = container.querySelector(".tabUnderline");
const tabs = Array.from(container.querySelectorAll('[role="tab"]'));
const tabPanels = Array.from(container.querySelectorAll('[role="tabpanel"]'));

let focusedTab = 0;

tabList.addEventListener("keydown", handleTabListKeydown);

for (const tab of tabs) {
  tab.addEventListener("click", handleTabClick);
}

function updateTabFocus() {
  // Give each tab an index of -1 so that it cannot be focused by normal means (e.g. with the 'tab' key).
  for (const tab of tabs) {
    tab.setAttribute("tabindex", -1);
  }
  // Give only the currently focused tab an index of 0 so that it can be navigated to with the 'tab' key, and from there its siblings can be focused with the arrow keys.
  tabs[focusedTab].setAttribute("tabindex", 0);
  tabs[focusedTab].focus();
}

function handleTabListKeydown(event) {
  const key = event.key;

  if (key === "ArrowRight" || key === "ArrowLeft") {
    if (key === "ArrowRight") {
      focusedTab++;
      // We have gone past the end, wrap around to the start
      if (focusedTab >= tabs.length) {
        focusedTab = 0;
      }
    } else if (key === "ArrowLeft") {
      focusedTab--;
      // We have gone before the start, wrap around to the end
      if (focusedTab < 0) {
        focusedTab = tabs.length - 1;
      }
    }
    updateTabFocus();
  }
}

function handleTabClick(event) {
  const target = event.target;
  const selectedTabIndex = tabs.indexOf(target);

  // unselect all the tabs, then select the clicked tab
  for (const tab of tabs) {
    tab.setAttribute("aria-selected", false);
  }
  target.setAttribute("aria-selected", true);

  // hide all the tab panels, then show the one that the clicked tab controls
  for (const panel of tabPanels) {
    panel.setAttribute("hidden", true);
  }
  container
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");

  // move the tab underline to beneath the currently selected tab
  tabUnderline.style.transform = `translateX(${selectedTabIndex * 100}%)`;

  focusedTab = selectedTabIndex;
  updateTabFocus();
}




/**
 * when i click the menu trigger,
 * the menu appears
 */

function app() {
  const menuTrigger =
    document.querySelector("#profile-menu");
  const menu = document.querySelector(
    "#profile-menu-content"
  );

  const allMenuItems = menu.querySelectorAll(
    '[role="menuitem"]'
  );

  function closeMenu() {
    menuTrigger.ariaExpanded = "false";
    menuTrigger.focus();
  }

  function handleMenuEscapeKeypress(event) {
    // if user pressed escape key
    if (event.key === "Escape") {
      toggleMenu();
    }
  }

  function handleMenuItemArrowKeyPress(
    event,
    menuItemIndex
  ) {
    // create some helpful variables : isLastMenuItem, isFirstMenuItem
    const isLastMenuItem =
      menuItemIndex === allMenuItems.length - 1;
    const isFirstMenuItem = menuItemIndex === 0;

    const nextMenuItem = allMenuItems.item(
      menuItemIndex + 1
    );
    const previousMenuItem = allMenuItems.item(
      menuItemIndex - 1
    );

    // if the user pressed arrow right or arrow down
    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowDown"
    ) {
      // if user is on last item, focus on first menuitem
      if (isLastMenuItem) {
        allMenuItems.item(0).focus();

        return;
      }
      // then focus on next menu item
      nextMenuItem.focus();
    }

    // if the user pressed arrow up or arrow left
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowLeft"
    ) {
      if (isFirstMenuItem) {
        allMenuItems.item(allMenuItems.length - 1).focus();
        return;
      }

      previousMenuItem.focus();
    }
    // then focus on the previous menu item
    // if the user is on first menu item, focus on last menuitem
  }

  function openMenu() {
    menuTrigger.ariaExpanded = "true";
    allMenuItems.item(0).focus();

    menu.addEventListener(
      "keyup",
      handleMenuEscapeKeypress
    );

    // for each menu item, register an event listener for the keyup event
    allMenuItems.forEach(function (
      menuItem,
      menuItemIndex
    ) {
      menuItem.addEventListener("keyup", function (event) {
        handleMenuItemArrowKeyPress(event, menuItemIndex);
      });
    });
  }

  function toggleMenu() {
    const isExpanded =
      menuTrigger.attributes["aria-expanded"].value ===
      "true";
    menu.classList.toggle("menu-active");

    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuTrigger.addEventListener("click", toggleMenu);
}

app();
