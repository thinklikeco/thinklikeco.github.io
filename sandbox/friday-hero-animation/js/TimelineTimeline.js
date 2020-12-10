/**
* Class representing the TimelineTimeline timeline.
*
* Made with Flow
*/

class TimelineTimeline {
    /**
    * @constructor
    *
    * @param {HTMLElement} rootElement
    *   Root Element of the DOM containing the elements that will be animated in this timeline.
    *
    * @param {String} resourcesPath
    *   The path pointing to the root of the Timeline folder.
    */
    constructor(rootElement, elementID, resourcesPath) {
        this.rootElement = rootElement;
        this.elementID = elementID;
        this.resourcesPath = resourcesPath;
        this.imagesFolderPath = resourcesPath + "/img";
        this.loadFillImages();
    }

    /**
    * Returns the timeline's duration in milliseconds.
    */
    get duration() { return 8000 }

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
        path = this.rootElement.getElementById("purple_3-path")
        path.d = "M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0"
        path.innerHTML = `
                <animate
                  attributeName="d"
                  values="M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0;M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0;M0,0c0,0,80,0,80,0 0,0,0,80,0,80 0,0,-80,0,-80,0 0,0,0,-80,0,-80zM0,0;M0,0c0,0,80,0,80,0 0,0,0,80,0,80 0,0,-80,0,-80,0 0,0,0,-80,0,-80zM0,0"
                  dur="8s"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0;0.75;0.8125;1"
                  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1"
                />
 `

        path = this.rootElement.getElementById("purple_2-path")
        path.d = "M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0"
        path.innerHTML = `
                <animate
                  attributeName="d"
                  values="M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0;M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0;M0,0c0,0,80,0,80,0 0,0,0,80,0,80 0,0,-80,0,-80,0 0,0,0,-80,0,-80zM0,0;M0,0c0,0,80,0,80,0 0,0,0,80,0,80 0,0,-80,0,-80,0 0,0,0,-80,0,-80zM0,0"
                  dur="8s"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0;0.4375;0.5;1"
                  keySplines="0 0 1 1;0.42 0 0.58 1;0.42 0 0.58 1"
                />
 `

        path = this.rootElement.getElementById("purple_1-path")
        path.d = "M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0"
        path.innerHTML = `
                <animate
                  attributeName="d"
                  values="M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0;M0,0c0,0,80,0,80,0 0,0,0,1,0,1 0,0,-80,0,-80,0 0,0,0,-1,0,-1zM0,0;M0,0c0,0,80,0,80,0 0,0,0,80,0,80 0,0,-80,0,-80,0 0,0,0,-80,0,-80zM0,0;M0,0c0,0,80,0,80,0 0,0,0,80,0,80 0,0,-80,0,-80,0 0,0,0,-80,0,-80zM0,0"
                  dur="8s"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0;0.125;0.1875;1"
                  keySplines="0 0 1 1;0.645 0.045 0.355 1;0.42 0 0.58 1"
                />
 `

        // Gradient Animations
        let defs;
    } 

    loadSVGShapeMaskAnimations() {    } 

    /**
    * @return
    * Returns the list of svg shapes that are animated in this timeline.
    */
    get allShapes() {
        return [
            this.rootElement.querySelector(`${this.elementID} .red-svg`),
            this.rootElement.querySelector(`${this.elementID} .purple-svg`),
            this.rootElement.querySelector(`${this.elementID} .mask_1-svg`),
            this.rootElement.querySelector(`${this.elementID} .purple_1-svg`),
            this.rootElement.querySelector(`${this.elementID} .green-svg`),
            this.rootElement.querySelector(`${this.elementID} .mask_2-svg`),
            this.rootElement.querySelector(`${this.elementID} .purple_2-svg`),
            this.rootElement.querySelector(`${this.elementID} .yellow-svg`),
            this.rootElement.querySelector(`${this.elementID} .mask_3-svg`),
            this.rootElement.querySelector(`${this.elementID} .purple_3-svg`),
            this.rootElement.querySelector(`${this.elementID} .bill-svg`),
            this.rootElement.querySelector(`${this.elementID} .mask_4-svg`),
            this.rootElement.querySelector(`${this.elementID} .alice-svg`),
            this.rootElement.querySelector(`${this.elementID} .mask_5-svg`),
            this.rootElement.querySelector(`${this.elementID} .oval-svg`),
            this.rootElement.querySelector(`${this.elementID} .path-svg`),
            this.rootElement.querySelector(`${this.elementID} .carol-svg`),
            this.rootElement.querySelector(`${this.elementID} .mask_6-svg`),
            this.rootElement.querySelector(`${this.elementID} .oval_1-svg`),
            this.rootElement.querySelector(`${this.elementID} .path_1-svg`),
            this.rootElement.querySelector(`${this.elementID} .oval_2-svg`),
            this.rootElement.querySelector(`${this.elementID} .path_2-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle_13-svg`),
            this.rootElement.querySelector(`${this.elementID} .path_3-svg`),
            this.rootElement.querySelector(`${this.elementID} .path_4-svg`),
            this.rootElement.querySelector(`${this.elementID} .shape-svg`),
            this.rootElement.querySelector(`${this.elementID} .path_5-svg`),
            this.rootElement.querySelector(`${this.elementID} .path_6-svg`),
            this.rootElement.querySelector(`${this.elementID} .oval_3-svg`),
            this.rootElement.querySelector(`${this.elementID} .path_7-svg`),
            this.rootElement.querySelector(`${this.elementID} .path_8-svg`),
            this.rootElement.querySelector(`${this.elementID} .shape_1-svg`),
            this.rootElement.querySelector(`${this.elementID} .line_104-svg`),
            this.rootElement.querySelector(`${this.elementID} .oval_4-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle_14-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle-svg`),
            this.rootElement.querySelector(`${this.elementID} .bitmap_5-svg`),
            this.rootElement.querySelector(`${this.elementID} .mask_7-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle_15-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle_1-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle_2-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle_3-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle_4-svg`),
            this.rootElement.querySelector(`${this.elementID} .rectangle_16-svg`),
            this.rootElement.querySelector(`${this.elementID} .oval_5-svg`),
            this.rootElement.querySelector(`${this.elementID} .shape_2-svg`),
            this.rootElement.querySelector(`${this.elementID} .oval_6-svg`),
        ]
    }

    artboardAnimation() {
        // Workaround for Safari bug
        return this.rootElement.querySelector(`${this.elementID}.flow-artboard`).animate({
        backgroundPosition: ['0px', '1px'],
        }, {
            delay: 0,
            duration: 8000,
        });
    }
    purple_1_topTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .purple_1`);
        return element.animate({
            top: ['80px', '80px', '40px', '40px'],
            easing: ["linear", "cubic-bezier(0.645, 0.045, 0.355, 1)", "ease-in-out"],
            offset: [0, 0.125, 0.1875, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }purple_1_heightTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .purple_1`);
        return element.animate({
            height: ['1px', '1px', '80px', '80px'],
            easing: ["linear", "cubic-bezier(0.645, 0.045, 0.355, 1)", "ease-in-out"],
            offset: [0, 0.125, 0.1875, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }purple_2_topTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .purple_2`);
        return element.animate({
            top: ['80px', '80px', '40px', '40px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.4375, 0.5, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }purple_2_heightTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .purple_2`);
        return element.animate({
            height: ['1px', '1px', '80px', '80px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.4375, 0.5, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }purple_3_topTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .purple_3`);
        return element.animate({
            top: ['80px', '80px', '40px', '40px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.75, 0.8125, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }purple_3_heightTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .purple_3`);
        return element.animate({
            height: ['1px', '1px', '80px', '80px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.75, 0.8125, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }bill_check_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .bill_check`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.125, 0.15625, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }carol_check_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .carol_check`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.4375, 0.4625, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }alice_check_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .alice_check`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.75, 0.775, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }planner_leftTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .planner`);
        return element.animate({
            left: ['355px', '355px', '360px', '360px', '365px', '365px', '370px', '370px'],
            easing: ["linear", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out"],
            offset: [0, 0.275, 0.3125, 0.5125, 0.5375, 0.875, 0.9, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }planner_topTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .planner`);
        return element.animate({
            top: ['125px', '125px', '120px', '120px', '115px', '115px', '110px', '110px'],
            easing: ["linear", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out"],
            offset: [0, 0.275, 0.3125, 0.5125, 0.5375, 0.875, 0.9, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }planner_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .planner`);
        return element.animate({
            opacity: [0.4, 0.4, 0.6, 0.6, 0.8, 0.8, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out"],
            offset: [0, 0.275, 0.3125, 0.5125, 0.5375, 0.875, 0.9, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }kudos_leftTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .kudos`);
        return element.animate({
            left: ['360px', '360px', '365px', '365px', '370px', '370px'],
            easing: ["linear", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out"],
            offset: [0, 0.2625, 0.29375, 0.5, 0.525, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }kudos_topTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .kudos`);
        return element.animate({
            top: ['120px', '120px', '115px', '115px', '110px', '110px', '210px', '210px'],
            easing: ["linear", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out"],
            offset: [0, 0.2875, 0.31875, 0.5, 0.525, 0.85, 0.9125, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }kudos_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .kudos`);
        return element.animate({
            opacity: [0.4, 0.4, 0.6, 0.6, 1, 1, 0, 0],
            easing: ["linear", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out"],
            offset: [0, 0.2625, 0.29375, 0.5, 0.525, 0.8875, 0.9125, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }alice_1_leftTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .alice_1`);
        return element.animate({
            left: ['82px', '82px', '52px', '52px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.625, 0.675, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }alice_1_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .alice_1`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.625, 0.675, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }thanks_for_providing_leftTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .thanks_for_providing`);
        return element.animate({
            left: ['205px', '205px', '175px', '175px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.65, 0.7, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }thanks_for_providing_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .thanks_for_providing`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.65, 0.7, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }goal_leftTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .goal`);
        return element.animate({
            left: ['365px', '365px', '370px', '370px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.25, 0.275, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }goal_topTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .goal`);
        return element.animate({
            top: ['115px', '115px', '110px', '110px', '210px', '210px'],
            easing: ["linear", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out"],
            offset: [0, 0.25, 0.275, 0.5, 0.5625, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }goal_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .goal`);
        return element.animate({
            opacity: [0.6, 0.6, 1, 1, 0, 0],
            easing: ["linear", "ease-in-out", "ease-in-out", "ease-in-out", "ease-in-out"],
            offset: [0, 0.25, 0.275, 0.525, 0.5625, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }ahead_done_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .ahead_done`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.375, 0.4, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }routine_topTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .routine`);
        return element.animate({
            top: ['110px', '110px', '210px', '210px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.25, 0.3125, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }routine_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .routine`);
        return element.animate({
            opacity: [1, 1, 0, 0],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.275, 0.3125, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }friday_task_leftTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .friday_task`);
        return element.animate({
            left: ['173px', '173px', '143px', '143px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.05, 0.1, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }friday_task_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .friday_task`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.05, 0.1, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }trello_task_leftTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .trello_task`);
        return element.animate({
            left: ['157.5px', '157.5px', '128px', '128px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.075, 0.125, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }trello_task_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .trello_task`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.075, 0.125, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }meeting_leftTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .meeting`);
        return element.animate({
            left: ['141.5px', '141.5px', '112px', '112px'],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.025, 0.075, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }meeting_opacityTrack() {
        const element = this.rootElement.querySelector(`${this.elementID} .meeting`);
        return element.animate({
            opacity: [0, 0, 1, 1],
            easing: ["linear", "ease-in-out", "ease-in-out"],
            offset: [0, 0.025, 0.075, 1],
          },
          {
            duration: this.duration,
            composite: TimelineTimeline.composite.REPLACE,
            fill: TimelineTimeline.fill.FORWARDS
          }
        )
    }
        /**
        * Creates and returns all animations for this timeline.
        */
        createAllAnimations() {
            return [
                this.artboardAnimation(),
                this.purple_1_topTrack(),
                this.purple_1_heightTrack(),
                this.purple_2_topTrack(),
                this.purple_2_heightTrack(),
                this.purple_3_topTrack(),
                this.purple_3_heightTrack(),
                this.bill_check_opacityTrack(),
                this.carol_check_opacityTrack(),
                this.alice_check_opacityTrack(),
                this.planner_leftTrack(),
                this.planner_topTrack(),
                this.planner_opacityTrack(),
                this.kudos_leftTrack(),
                this.kudos_topTrack(),
                this.kudos_opacityTrack(),
                this.alice_1_leftTrack(),
                this.alice_1_opacityTrack(),
                this.thanks_for_providing_leftTrack(),
                this.thanks_for_providing_opacityTrack(),
                this.goal_leftTrack(),
                this.goal_topTrack(),
                this.goal_opacityTrack(),
                this.ahead_done_opacityTrack(),
                this.routine_topTrack(),
                this.routine_opacityTrack(),
                this.friday_task_leftTrack(),
                this.friday_task_opacityTrack(),
                this.trello_task_leftTrack(),
                this.trello_task_opacityTrack(),
                this.meeting_leftTrack(),
                this.meeting_opacityTrack(),
            ].flat()
        }
}

// https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/composite
    TimelineTimeline.composite = {
        ADD: 'add',
        REPLACE: 'replace',
        ACCUMULATE: 'accumulate',
    }

// https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill
    TimelineTimeline.fill = {
        NONE: 'none',
        FORWARDS: 'forwards',
        BACKWARDS: 'backwards',
        BOTH: 'both',
        AUTO: 'auto',
    }

Object.freeze(TimelineTimeline)
