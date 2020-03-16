/**
* Class representing the LoadingTimeline timeline.
*
* Made with Flow
*/

class LoadingTimeline {
    /**
    * @constructor
    *
    * @param {HTMLElement} rootElement
    *   Root Element of the DOM containing the elements that will be animated in this timeline.
    *
    * @param {String} resourcesPath
    *   The path pointing to the root of the Timeline folder.
    */
    constructor(rootElement, resourcesPath) {
        this.rootElement = rootElement;
        this.resourcesPath = resourcesPath;
        this.imagesFolderPath = resourcesPath + "/img";
        this.loadFillImages();
    }

    /**
    * Returns the timeline's duration in milliseconds.
    */
    get duration() { return 1800 }

	loadFillImages() {
        let pattern;
	}
  
    loadSVGAnimations() {
        this.loadSVGShapeAnimations()
        this.loadSVGShapeMaskAnimations()
    }

    loadSVGShapeAnimations() {
        // Path Animations
        let path;         
        path = this.rootElement.getElementById("yellow-path")
        path.d = "M0,4c-0,-2.194,1.806,-4,4,-4 0,0,58.67,0,58.67,0 2.194,0,4,1.806,4,4 0,0,0,0,0,0 0,2.194,-1.806,4,-4,4 0,0,-58.67,0,-58.67,0 -2.194,0,-4,-1.806,-4,-4 0,0,0,0,0,0 0,0,0,0,0,0zM0,4"
        path.innerHTML = `


 `
         
        path = this.rootElement.getElementById("green-path")
        path.d = "M0,4c-0,-2.194,1.806,-4,4,-4 0,0,58.67,0,58.67,0 2.194,0,4,1.806,4,4 0,0,0,0,0,0 0,2.194,-1.806,4,-4,4 0,0,-58.67,0,-58.67,0 -2.194,0,-4,-1.806,-4,-4 0,0,0,0,0,0 0,0,0,0,0,0zM0,4"
        path.innerHTML = `


 `
         
        path = this.rootElement.getElementById("red-path")
        path.d = "M0,4c-0,-2.194,1.806,-4,4,-4 0,0,0,0,0,0 2.194,-0,4,1.806,4,4 0,0,0,0,0,0 0,0,0,58.67,0,58.67 0,2.194,-1.806,4,-4,4 -0,0,0,0,-0,0 0,0,0,0,0,0 -2.194,0,-4,-1.806,-4,-4 0,0,0,0,0,0 0,0,0,-58.67,0,-58.67zM0,4"
        path.innerHTML = `


 `
         
        path = this.rootElement.getElementById("purple-path")
        path.d = "M0,4c-0,-2.194,1.806,-4,4,-4 0,0,58.67,0,58.67,0 2.194,0,4,1.806,4,4 0,0,0,0,0,0 0,2.194,-1.806,4,-4,4 0,0,-58.67,0,-58.67,0 -2.194,0,-4,-1.806,-4,-4 0,0,0,0,0,0 0,0,0,0,0,0zM0,4"
        path.innerHTML = `


 `
         
        path = this.rootElement.getElementById("star-path")
        path.d = "M5.057,2.246c0,0,4.621,2.667,4.621,2.667 0,0,3.07,-4.914,3.07,-4.914 0,0,1.288,5.58,1.288,5.58 0,0,5.372,-1.141,5.372,-1.141 0,0,-2.799,4.478,-2.799,4.478 0,0,5.44,3.14,5.44,3.14 0,0,-6.213,1.32,-6.213,1.32 0,0,1.155,5,1.155,5 0,0,-4.623,-2.669,-4.623,-2.669 0,0,-3.071,4.912,-3.071,4.912 0,0,-1.288,-5.579,-1.288,-5.579 0,0,-5.373,1.141,-5.373,1.141 0,0,2.799,-4.479,2.799,-4.479 0,0,-5.437,-3.139,-5.437,-3.139 0,0,6.211,-1.321,6.211,-1.321 0,0,-1.153,-4.998,-1.153,-4.998zM5.057,2.246"
        path.innerHTML = `


 `

        // Gradient Animations
        let defs;    } 

    loadSVGShapeMaskAnimations() {    } 

    /**
    * @return
    * Returns the list of svg shapes that are animated in this timeline.
    */
    get allShapes() {
        return [
            this.rootElement.querySelector("#Loading .yellow-svg"),
            this.rootElement.querySelector("#Loading .green-svg"),
            this.rootElement.querySelector("#Loading .red-svg"),
            this.rootElement.querySelector("#Loading .purple-svg"),
            this.rootElement.querySelector("#Loading .star-svg"),
        ]
    }

    artboardAnimation() {
        // Workaround for Safari bug
        return this.rootElement.querySelector('#Loading.flow-artboard').animate({
        backgroundPosition: ['0px', '1px'],
        }, {
            delay: 0,
            duration: 1800,
        });
    }
     yellowTransformAnimation() {
        return this.rootElement.querySelector('#Loading .yellow').animate([
            { transform: 'translate(-50%, -50%) rotate(30deg)', offset: 0, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(30deg)', offset: 0.277778, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(390deg)', offset: 1 },
        ], {
            duration: this.duration,
            composite: 'add',
            fill: 'forwards'
        });
    }
     greenTransformAnimation() {
        return this.rootElement.querySelector('#Loading .green').animate([
            { transform: 'translate(-50%, -50%) rotate(-58deg)', offset: 0, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(-58deg)', offset: 0.222222, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(302deg)', offset: 0.944444 },
            { transform: 'translate(-50%, -50%) rotate(302deg)', offset: 1 },
        ], {
            duration: this.duration,
            composite: 'add',
            fill: 'forwards'
        });
    }
     redTransformAnimation() {
        return this.rootElement.querySelector('#Loading .red').animate([
            { transform: 'translate(-50%, -50%) rotate(-13deg)', offset: 0, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(-13deg)', offset: 0.166667, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(347deg)', offset: 0.888889 },
            { transform: 'translate(-50%, -50%) rotate(347deg)', offset: 1 },
        ], {
            duration: this.duration,
            composite: 'add',
            fill: 'forwards'
        });
    }
     purpleTransformAnimation() {
        return this.rootElement.querySelector('#Loading .purple').animate([
            { transform: 'translate(-50%, -50%) rotate(-12deg)', offset: 0, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(-12deg)', offset: 0.111111, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(348deg)', offset: 0.833333 },
            { transform: 'translate(-50%, -50%) rotate(348deg)', offset: 1 },
        ], {
            duration: this.duration,
            composite: 'add',
            fill: 'forwards'
        });
    }
     starTransformAnimation() {
        return this.rootElement.querySelector('#Loading .star').animate([
            { transform: 'translate(-50%, -50%) rotate(0deg)', offset: 0, easing: 'ease-in-out' },
            { transform: 'translate(-50%, -50%) rotate(360deg)', offset: 0.555556 },
            { transform: 'translate(-50%, -50%) rotate(360deg)', offset: 1 },
        ], {
            duration: this.duration,
            composite: 'add',
            fill: 'forwards'
        });
    }

        /**
        * Creates and returns all animations for this timeline.
        */
        createAllAnimations() {
            // Animations      
            let yellowTransformAnimation = this.yellowTransformAnimation();
            let greenTransformAnimation = this.greenTransformAnimation();
            let redTransformAnimation = this.redTransformAnimation();
            let purpleTransformAnimation = this.purpleTransformAnimation();
            let starTransformAnimation = this.starTransformAnimation();
        
            // Tracks
            return [
                this.artboardAnimation(),
                yellowTransformAnimation,
                greenTransformAnimation,
                redTransformAnimation,
                purpleTransformAnimation,
                starTransformAnimation,
            ].flat()
        }
}

Object.freeze(LoadingTimeline)
