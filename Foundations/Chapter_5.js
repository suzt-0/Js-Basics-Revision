// Utility: small logger that appends lines with timestamps.
// a user defined function that logs messages to a specified element

const log = (el, ...args) => { //el is the element to log to, args are the messages to log
    const ts = new Date().toLocaleTimeString();
    el.textContent += `[${ts}] ${args.join(' ')}\n`;
    el.scrollTop = el.scrollHeight;
};

// 1) Basics

{
    // Select the paragraph to manipulate its content/attributes/classes
    const p = document.getElementById('basic-text');

    //Get access to buttons via DOM using their IDs
    //Add event listeners to buttons to perform various actions on the paragraph

    // Set textContent Button Event Functionality
    document.getElementById('set-text').addEventListener('click', () => {
        // textContent treats content as plain text (safe; no HTML interpretation).

        p.textContent = 'Simple textContent'; //this updates the text inside the paragraph

        // .textContent is a method to set or get the text content of an element
        // It does not parse HTML tags, so any HTML tags will be displayed as plain text.

    });

    // Set innerHTML Button Event Functionality
    document.getElementById('set-html').addEventListener('click', () => {

        // innerHTML parses HTML (be careful with untrusted content).

        p.innerHTML = '<strong>Strong innerHTML</strong>';

        // .innerHTML is a property that allows you to set or get the HTML content of an element.
        // It parses HTML tags, so any valid HTML will be rendered accordingly.

    });

    // Set Attribute Button Event Functionality
    document.getElementById('set-attr').addEventListener('click', () => {

        // setAttribute allows setting any attribute by name

        p.setAttribute('title', 'hover to see title');
        // This sets the title attribute of the paragraph element

        //Syntax: element.setAttribute(name, value)
        // name: The name of the attribute to set.
        // value: The value to assign to the attribute.

        p.dataset.example = 'demo'; // creates data-example="demo"

        //dataset is a special property that allows you to access data-* attributes
        p.textContent = p.dataset.example + " dataset being set";
        //this updates the text inside the paragraph to show the dataset value

    });


    document.getElementById('toggle-class').addEventListener('click', () => {

        // classList supports add/remove/toggle/contains
        p.classList.toggle('accent-2');
        // This toggles the 'accent-2' class on the paragraph element

        //toggle: element.classList.toggle(className)
        // className: The class name to toggle.
        // If the class is present, it removes it; if not present, it adds it.

        //add:
        //p.classList.add('accent-2'); // adds the 'accent-2' class
        //if already present, does nothing

        //remove:
        //p.classList.remove('accent-2'); // removes the 'accent-2' class
        //if not present, does nothing
    });
}



// 2) Create / Insert / Remove / Replace / Clone
// this is most useful for dynamic lists, cards, tables, etc.
// it will often involve loops and data from APIs

{
    //access the list element using its ID
    const list = document.getElementById('todo');

    let id = 1;// unique ID for each item

    // Helper to create a new list item with unique ID
    //takes text as input and returns a new list item element
    // with that text and a unique data-id attribute
    const mkItem = (txt) => {

        //.createElement creates a new HTML element specified by the tag name
        //Syntax: document.createElement(tagName)

        const li = document.createElement('li');
        li.textContent = txt;
        li.dataset.id = id++;
        return li; //return the created list item as a new element
    };


    // Seed list
    //initial items to populate the list
    //these items will be added when the script runs
    //these require no button clicks or event occurrences
    list.append(mkItem('Learn querySelector'), mkItem('Use classList'), mkItem('Create elements'));

    // Button Event Listeners for various list operations
    document.getElementById('add-one').addEventListener('click', () => {

        //apends a single new item to the end of the list
        list.append(mkItem('Appended item'));
    });

    // Append many items efficiently
    //this adds multiple items to the list in one operation
    //gets triggered by clicking the 'add-many' button
    document.getElementById('add-many').addEventListener('click', () => { //'click' is the event type to listen for

        // Use DocumentFragment to batch DOM writes (fewer reflows)

        //DocumentFragment is a lightweight container for DOM nodes
        //it allows you to build a subtree of elements off-DOM
        //and then insert them all at once into the live DOM    

        const frag = document.createDocumentFragment();

        //.createDocumentFragment creates a new empty DocumentFragment object
        //Syntax: document.createDocumentFragment()
        //this initally holds no child nodes but can have nodes appended to it

        for (let i = 0; i < 10; i++)
            frag.append(mkItem('Bulk #' + (i + 1)) //appends new items to the fragment till the loop completes
            );


        list.append(frag); //appends the entire fragment to the list in one operation instead of one by one
    });

    //Prepend item to start of list
    document.getElementById('insert-first').addEventListener('click', () => {

        //similar to append but adds to start of list
        list.prepend(mkItem('Prepended first'));
    });

    // Replace first item in list
    document.getElementById('replace-first').addEventListener('click', () => {
        //initally get the first item in the list
        const first = list.firstElementChild;

        //if first item exists, replace it with a new item
        //if the first item does not exist (list is empty), do nothing
        if (first)
            first.replaceWith(mkItem('Replaced first item')
                //.replaceWith replaces the specified node with a new node
                //eg: oldNode.replaceWith(newNode)
            );

    });

    // Remove last item from list
    document.getElementById('remove-last').addEventListener('click', () => {
        //removes the last item from the list

        list.lastElementChild?.remove(); //checks if lastElementChild exists before calling remove() eg a.operator?b :c
        //.remove removes the element from the DOM
        //eg: element.remove()
    });


    // Clone last item in list
    //creates a duplicate of the last item and appends it to the end of the list
    document.getElementById('clone-last').addEventListener('click', () => {

        //cloneNode(true) creates a deep copy of the node and its subtree
        //eg: element.cloneNode(true|false)
        //if deep is true, it clones the node and all its descendants
        //if false, it clones only the node itself
        const last = list.lastElementChild;

        if (last)
            list.append(last.cloneNode(true)//clones the last item and appends it to the list
                // Syntax: node.cloneNode(true) //it will clone the node and its children 
            );
    });
}

// 3) Events & Delegation
{
    // Container for buttons
    const grid = document.getElementById('btn-grid');

    // Log area
    const elog = document.getElementById('events-log');

    // Render some initial buttons
    for (let i = 1; i <= 4; i++) {
        //this will create 4 buttons and append them to the grid container
        const b = document.createElement('button');
        b.textContent = 'Button ' + i;
        b.dataset.id = String(i);
        grid.append(b);
    }

    // Delegated listener on the container (works for current + future children)
    // adds a single event listener to the grid container
    // and since we are appending new buutons to the grid
    // the listener will also handle clicks on those new buttons
    grid.addEventListener('click', (e) => {
        // Determine if a button was clicked
        const btn = e.target.closest('button');
        //.closest('button') checks if the clicked element or any of its ancestors is a button

        if (!btn || !grid.contains(btn)) // Ignore clicks outside buttons in the grid
            return; //if no button was clicked or the clicked button is not inside the grid, exit the function


        log(elog, 'Clicked', btn.textContent, '(data-id=' + (btn.dataset.id ?? '-') + ')');
        //logs the button text and its data-id attribute to the event log area

    });

    // Add a dynamic button to prove delegation works
    document.getElementById('add-dynamic-btn').addEventListener('click', () => {
        //creates a new button with a unique data-id and appends it to the grid container
        //the delegated event listener on the grid will handle clicks on this new button as well
        const n = grid.querySelectorAll('button').length + 1;
        const b = document.createElement('button');
        b.textContent = 'Button ' + n;
        b.dataset.id = String(n);
        grid.append(b);
    });

    // One-time listener example
    //creates a button that when clicked will log a message only once
    //but there is a problem here, since its being added to the grid
    // the delegated listener will also log clicks on this button
    // and will allow multiple clicks
    const gridOnce = document.getElementById('btn-grid-once');

    document.getElementById('once-btn').addEventListener('click', () => {
        const b = document.createElement('button');
        b.textContent = 'Click me (once)';
        b.className = 'btn';
        // grid.append(b);
        gridOnce.append(b);

        // Add listener that removes itself after first invocation
        b.addEventListener('click', () => {
            log(elog, 'This fires only once.');
        }, { once: true });
        //the { once: true } option ensures the listener is removed after it fires once
        // Syntax: element.addEventListener(event, handler, { once: true}); 
        // this is useful for actions that should only happen a single time like confirmations or initializations
    });
}

// 4) Forms
{

    const form = document.getElementById('demo-form'); //access the form element using its ID
    const out = document.getElementById('form-out'); //access the output area to display form results
    const nameI = document.getElementById('name-input'); //access the name input field
    const ageI = document.getElementById('age-input'); //access the age input field

    form.addEventListener('submit', (e) => { //listen for the form submission event
        e.preventDefault(); // don't reload page
        if (!form.reportValidity())
            return; // show built-in validation bubbles
        const data = new FormData(form); //collects all form data into a FormData object
        console.log(...data.entries()); //logs data for us to see in console

        // Display submitted data in output area
        // updates the output area with the submitted name and age
        out.textContent = `Hello ${data.get('name')} (${data.get('age') || 'n/a'})`;
    });

    document.getElementById('prefill').addEventListener('click', () => {
        nameI.value = 'Ada Lovelace'; //prefills the name input field
        ageI.value = '36'; //prefills the age input field
    });
}

// 5) Traversal
{
    // Tree container
    //get the tree element by its ID
    // by tree we mean a nested list structure in our case
    // each node is represented by a list item (<li>)
    const tree = document.getElementById('tree');

    // State for expand/collapse
    let collapsed = false;

    document.getElementById('highlight-closest').addEventListener('click', () => {

        // Click any node; the closest .node gets highlighted
        // Event delegation on the tree container
        // When a node is clicked, find the closest ancestor with class 'node'
        const onClick = (e) => {
            const node = e.target.closest('.node'); //finds the closest ancestor with class 'node'

            if (!node)  // Ignore clicks outside nodes
                return;

            // Remove highlight from all nodes if any of them have clicked state ie accent-2 class
            //then add highlight to the clicked node
            tree.querySelectorAll('.node').forEach(n => n.classList.remove('accent-2'));
            //querySelectorAll('.node') selects all elements with class 'node' within the tree
            //forEach iterates over each node and removes the 'accent-2' class to clear previous highlights
            node.classList.add('accent-2');

        };
        // Attach once, keep it on
        //but given below will cause problem if we want to click nodes multiple times
        // and highlight them one at a time as it will only allow one click ever
        // tree.addEventListener('click', onClick, { once: true }); 

        //correct way to allow us click multiple times and highlight nodes one after another 
        // we dont have to worry about mutiple highlights as we remove existing highlights first
        tree.addEventListener('click', onClick); 
    });

    //Collapsing and expanding tree nodes or lists in our case
    document.getElementById('expand-collapse').addEventListener('click', () => {
        // Toggle collapsed state
        collapsed = !collapsed;

        // children vs. firstElementChild/nextElementSibling traversal
        // Show/hide all nested <ul> elements based on collapsed state
        // children gives all child nodes including text nodes (like whitespace)
        // firstElementChild/nextElementSibling only gives element nodes (ignores text nodes)
        tree.querySelectorAll('ul ul').forEach(ul => {
            ul.style.display = collapsed ? 'none' : ''; //hides or shows the nested lists based on collapsed state
        });
    });
}

// 6) Template
// Template for card
// demonstrates using <template> for off-DOM markup
// and cloning it to create multiple cards efficiently
{
    const tpl = document.getElementById('card-tpl'); //access the template element using its ID
    const root = document.getElementById('cards'); //access the container where cards will be added
    
    // Sample data to populate cards
    const data = [
        { title: 'Template', desc: 'Use <template> for off-DOM markup.' },
        { title: 'Fragment', desc: 'Batch DOM work to minimize reflows.' },
        { title: 'Clone', desc: 'cloneNode(true) duplicates subtrees.' },
    ];

    // Add cards from template using data
    document.getElementById('add-cards').addEventListener('click', () => {
        // DocumentFragment to batch DOM writes
        const frag = document.createDocumentFragment();

        // For each data item, clone the template and populate it
        //useful for creating multiple similar elements efficiently
        for (const item of data) {
            //cloneNode(true) creates a deep copy of the template content
            const node = tpl.content.cloneNode(true);
            //populate the cloned template with data
            node.querySelector('.title').textContent = item.title;//sets the title in the cloned template
            node.querySelector('.desc').textContent = item.desc;//sets the description in the cloned template
            frag.append(node);//appends the populated node to the fragment
        }
        // Append all cards at once
        root.append(frag);
    });

    // Clear all cards
    document.getElementById('clear-cards').addEventListener('click', () => {
        root.replaceChildren(); //removes all child elements from the cards container
    });
}

// 7) Styles
{
    // Access elements
    const box = document.getElementById('color-box');//access the box element to manipulate its styles
    const out = document.getElementById('style-out');//access the output area to display computed styles

    // Inline Style
    //sets the background and border color of the box using inline styles
    document.getElementById('inline-style').addEventListener('click', () => {
        // Inline style overrides stylesheet (unless !important there)
        box.style.setProperty('background', 'linear-gradient(135deg, #60a5fa, #06b6d4)');
        box.style.setProperty('border-color', '#075985');
    });

    // Toggle class to apply CSS rules from stylesheet
    // toggles the 'hot' class on the box element to change its styles based on CSS classes
    document.getElementById('toggle-style-class').addEventListener('click', () => {
        box.classList.toggle('hot');
    });

    // Read computed styles
    document.getElementById('read-computed').addEventListener('click', () => {
        // Computed styles merge all sources (user agent + author + inline)
        const cs = getComputedStyle(box);
        out.textContent = `width=${cs.width}, height=${cs.height}, bg=${cs.backgroundImage || cs.backgroundColor}`;
    });
}

// 8) Shadow DOM
// encapsulated DOM with scoped styles and selectors
// useful for reusable components
// beware of accessibility implications
{
    // Host element for shadow DOM
    const host = document.getElementById('shadow-host');
    let shadow = null;

    // Attach Shadow DOM
    document.getElementById('attach-shadow').addEventListener('click', () => {
        // Prevent multiple attachments
        if (shadow) return;
        // Encapsulated DOM tree with its own scoping for selectors and styles

        shadow = host.attachShadow({ mode: 'open' }); //creates an open shadow root on the host element
        // Syntax: element.attachShadow({ mode: 'open' | 'closed' })
        // 'open' allows access to shadowRoot property; 'closed' hides it
        // .attachshadow is a method provided by the Element interface in the DOM API
        // it allows you to create a shadow root for the element, enabling Shadow DOM encapsulation
        // shadow root is a separate DOM tree that is isolated from the main document DOM
        // styles and scripts inside the shadow root do not affect the main document and vice versa
        // Useful for creating reusable components with encapsulated styles and behavior
        // must be careful with accessibility as shadow DOM can hide content from assistive technologies if not handled properly

        shadow.innerHTML = `
                    <style>
                        .card{ padding:8px; border-radius:8px; background:#061021; border:1px solid #0f1b33; }
                        .card strong{ color:#38bdf8; }
                    </style>
                    <div class="card">Hello from <strong>Shadow DOM</strong></div>
                `;
    });

    // Update Shadow DOM content
    document.getElementById('update-shadow').addEventListener('click', () => {
        // Update content inside shadow DOM if attached
        if (!shadow) 
            return;
        //creates a new div element with class 'card' and updates its text content with the current time
        const el = document.createElement('div');
        //creates a new div element
        el.className = 'card'; //sets the class of the div to 'card'
        el.textContent = 'Updated at ' + new Date().toLocaleTimeString(); //sets the text content of the div
        shadow.append(el); //appends the new div to the shadow root
    });
}

// 9) Custom Events
// useful for decoupled communication between components
// or parts of the app without direct references
{
    const span = document.getElementById('count-val');//access the span element to display the count value
    const clog = document.getElementById('custom-log');//access the log area to display custom event logs
    let count = 0;//initialize the count variable to keep track of the counter value

    // Emit custom event with detail    
    const emit = () => {
        span.textContent = String(count); //update the span element with the current count value
        // Bubble up so ancestors can listen too
        span.dispatchEvent( //dispatch a custom event named 'counter:changed' from the span element
            new CustomEvent('counter:changed',  { detail: { value: count }, bubbles: true } ));
            // Syntax: CustomEvent(eventName, options)
            //options usually includes detail and bubbles
            // details include the data that you want to pass with the event
            // CustomEvent(eventName, options) is a constructor for creating custom events
            // It is provided by the DOM API and allows you to create events with custom names and additional data
            // 'counter:changed' is the name of the event
            // detail contains additional data to pass with the event (in this case, the current count value)
            // bubbles: true allows the event to bubble up through the DOM tree
    };

    document.getElementById('inc').addEventListener('click', () => { count++; emit(); });
    document.getElementById('dec').addEventListener('click', () => { count--; emit(); });

    document.addEventListener('counter:changed', (e) => {
        log(clog, 'counter changed →', e.detail.value);
    });
}

// 10) MutationObserver
// monitor DOM changes
// useful for reacting to dynamic content changes
// or building custom frameworks/libraries
// MutationObserver is a built-in JavaScript object that allows you to monitor changes to the DOM (Document Object Model) tree
// It provides a way to react to changes in the structure or attributes of DOM elements
// rather than continuously polling for changes, which can be inefficient
// MutationObserver is more efficient as it uses event-driven notifications to inform you of changes
// This is useful for building custom frameworks, libraries, or applications that need to respond to dynamic content changes
{
    const list = document.getElementById('mut-list'); //access the list element to observe mutations
    const mlog = document.getElementById('mut-log'); //access the log area to display mutation logs

    const observer = new MutationObserver((mutations) => { //create a new MutationObserver to monitor changes in the list element
        for (const m of mutations) {//loop through each mutation record
            if (m.type === 'childList') { //check if the mutation type is 'childList' (nodes added or removed)
                if (m.addedNodes.length) log(mlog, `childList: +${m.addedNodes.length} nodes`);//log the number of added nodes
                if (m.removedNodes.length) log(mlog, `childList: -${m.removedNodes.length} nodes`);//log the number of removed nodes
            } else if (m.type === 'attributes') {//check if the mutation type is 'attributes' (attribute changes)
                log(mlog, `attributes: ${m.attributeName} on`, m.target.tagName.toLowerCase());//log the name of the changed attribute and the target element
            }
        }
    });

    //start observing the list element for childList and attribute changes, including its subtree
    observer.observe(list, { childList: true, attributes: true, subtree: true }); 

    document.getElementById('mut-add').addEventListener('click', () => { //add a new item to the list when the 'mut-add' button is clicked
        const li = document.createElement('li'); //create a new list item element
        li.textContent = 'Item @ ' + new Date().toLocaleTimeString();//set the text content of the list item with the current time
        list.append(li);//append the new list item to the list
    });

    document.getElementById('mut-attr').addEventListener('click', () => { //toggle a data attribute on the list element when the 'mut-attr' button is clicked
        list.toggleAttribute('data-flag');//toggles the presence of the 'data-flag' attribute on the list element
    });

    document.getElementById('mut-clear').addEventListener('click', () => {//clear all items from the list when the 'mut-clear' button is clicked
        list.replaceChildren();//removes all child elements from the list
    });
}

// 11) IntersectionObserver
{
    const container = document.getElementById('reveal-container');
    // Create demo boxes
    for (let i = 1; i <= 100; i++) {
        const d = document.createElement('div');
        d.className = 'reveal';
        d.textContent = 'Box ' + i;
        container.append(d);
    }
    // IntersectionObserver to reveal boxes when they enter viewport
    // It is a browser API that 
    // allows you to asynchronously observe changes in the intersection of a target element with an ancestor element 
    // or with a top-level document's viewport
    // in simple terms, it lets you know when an element becomes visible or invisible in the viewport
    // viewport refers to the visible area of a web page within the browser window
    // useful for lazy loading images, infinite scrolling, or triggering animations when elements come into view
    const io = new IntersectionObserver((entries, obs) => {
        // entries is an array of IntersectionObserverEntry objects
        // each entry contains information about the intersection of a target element with the viewport
        // simply put, it tells us which elements are visible and which are not
        // and below we loop through each entry(element) to check if it is intersecting (visible)
        // obs is the IntersectionObserver instance itself
        for (const e of entries) {
            // If the element is intersecting (visible in viewport)
            if (e.isIntersecting) {
                e.target.classList.add('visible'); // add 'visible' class to the element to trigger reveal styles
                obs.unobserve(e.target); // reveal once
            }
            else if (e.target.classList.contains('visible')) {
                e.target.classList.remove('visible'); // remove 'visible' class if it goes out of view
            }
        }
    }, { threshold: 0.2 });

    container.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// 12) requestAnimationFrame
// smooth animations tied to browser repaint cycles
// better performance than setInterval/setTimeout for animations
{
    const dot = document.getElementById('dot'); //access the dot element to animate it (the green dot)
    const track = dot.parentElement; //access the parent element which is the track for the dot (the container of the green dot)
    const startBtn = document.getElementById('start-anim'); //access the start button to start the animation
    const stopBtn = document.getElementById('stop-anim'); //access the stop button to stop the animation

    let rafId = 0;// variable to hold the requestAnimationFrame ID for cancelling later
    let start = 0;// variable to track the start time of the animation

    // Animation loop

    const animate = (t) => { //t is the current time in milliseconds passed by requestAnimationFrame
        if (!start) start = t; //initialize start time on first call
        const elapsed = (t - start) / 1000; // seconds elapsed since start
        // Calculate horizontal position within track
        const w = track.clientWidth - dot.clientWidth - 8;
        // clientWidth gives the inner width of an element in pixels
        // minus dot width and some padding to keep it inside the track

        // Looping motion using sine
        const x = (Math.sin(elapsed * 2) * 0.5 + 0.5) * w + 8; // oscillates between 0 and w
        // Math.sin(elapsed * 2) gives a value between -1 and 1
        // multiplying by 0.5 and adding 0.5 shifts it to between 0 and 1
        // multiplying by w scales it to the width of the track
        // adding 8 gives some padding from the left edge

        // Apply transform to move the dot
        dot.style.transform = `translateX(${x}px)`;
        // Request next frame
        rafId = requestAnimationFrame(animate); //request the next animation frame and call animate again
        // its a recursive loop that continues the animation
        // Syntax: requestAnimationFrame(callback)
        // callback is a function that will be called before the next repaint
    };

    startBtn.addEventListener('click', () => { //start the animation when start button is clicked
        if (rafId) return; // already running
        start = 0; //reset start time
        rafId = requestAnimationFrame(animate);//start the animation loop
    });

    stopBtn.addEventListener('click', () => { //stop the animation when stop button is clicked
        if (!rafId) return; // not running
        cancelAnimationFrame(rafId);//cancel the animation frame request to stop the animation
        rafId = 0;//reset rafId to indicate animation is stopped
    });

    // Pause animation if tab hidden (optional optimization)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && rafId) { cancelAnimationFrame(rafId); rafId = 0; }
    });
}

// Accessibility tip: focus outline for keyboard users only
(function focusVisiblePolyfill() { // this function adds a focus outline only when navigating via keyboard
    // this allows us to add a special class to elements
    let hadKeyboardEvent = false;
    const enable = () => { hadKeyboardEvent = true; }; //when a key is pressed, we set hadKeyboardEvent to true
    const disable = () => { hadKeyboardEvent = false; }; //when mouse or touch is used, we set hadKeyboardEvent to false
    document.addEventListener('keydown', enable, true); //listen for keydown events to enable keyboard navigation
    document.addEventListener('mousedown', disable, true); //listen for mouse down events to disable keyboard navigation
    document.addEventListener('pointerdown', disable, true); //listen for pointer down events to disable keyboard navigation
    document.addEventListener('touchstart', disable, true); // listen for touch start events to disable keyboard navigation

    // On focusin, if the last interaction was via keyboard, add 'kbd-focus' class
    document.documentElement.addEventListener('focusin', (e) => {
        if (hadKeyboardEvent) e.target.classList.add('kbd-focus');
    });

    // On focusout, always remove 'kbd-focus' class
    document.documentElement.addEventListener('focusout', (e) => {
        e.target.classList.remove('kbd-focus');
    });
})();