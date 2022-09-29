import { _decorator, Component, Button, Node, Sprite, Color, UITransform, instantiate, Layout, Vec3} from 'cc';
import { AS } from "db://as_framework/scripts/ASComponent";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
import { UIDrag } from 'db://as_framework/scripts/UIDrag';
import { UIDragSwap } from 'db://as_framework/scripts/UIDragSwap';
import { UIDrop } from 'db://as_framework/scripts/UIDrop';
import { intersectionPercent } from "db://as_framework/scripts/Utils";

const { ccclass, property } = _decorator;

@ccclass('Rearrange')
export class Rearrange extends AS(Component) {

    @property(Node)dragContainer : Node | null = null;
    @property(UIDrag)dragOptions : UIDrag[] | null = [];


    private _dragContainerUItranform : UITransform;

    awake(){
        this._dragContainerUItranform = this.dragContainer.getComponent(UITransform);
        this.dragOptions.forEach((dragOption, i)=>{
            dragOption.node.on(UIDrag.EventType.DRAG_DID_END, ()=>{
                this._dragOptionEnd(dragOption,i);
            })
            dragOption.node.on(UIDrag.EventType.DRAG_DID_BEGAN, ()=>{
               // this._dragOptionStart(dragOption,i);
            })
        })
       
    }
    private _dragOptionStart(dragOption,i){

        console.log("drag starts"+i)



    }

    private _dragOptionEnd(dragOption,i){   
             
        if (dragOption.node.position.x <= this.dragContainer.position.x + (this._dragContainerUItranform.width / 2) && dragOption.node.position.x >= this.dragContainer.position.x - (this._dragContainerUItranform.width / 2) && dragOption.node.position.y <= this.dragContainer.position.y + (this._dragContainerUItranform.height / 2) && dragOption.node.position.y >= this.dragContainer.position.y - (this._dragContainerUItranform.height / 2)) 
        {
                let newOption = instantiate(dragOption.node);
                const position = newOption.getPosition();
                newOption.removeComponent(UIDrag);
                newOption.parent = this.dragContainer;
                newOption.name = dragOption.name;
                this.dragContainer.getComponent(Layout).updateLayout()
                newOption.addComponent(UIDrag);
            
                this._addEventListeners(newOption)
                this.dragContainer.getComponent(UIDragSwap).onEnable()
                dragOption.node.active = false;
              //  let swap =false;
          

                for (let childPos = 0; childPos < this.dragContainer.children.length; childPos++) {
                
                    const child = this.dragContainer.children[childPos];
                    const otherDrag = child.getComponent(UIDrag);
                    if(otherDrag && otherDrag !== newOption.getComponent(UIDrag))
                    {    const otherDragUITransform = otherDrag.getComponent(UITransform)!;

                
                 if (position.x <= otherDrag.node.position.x + (otherDragUITransform.width / 2) && position.x >= otherDrag.node.position.x - (otherDragUITransform.width / 2) && position.y <= otherDrag.node.position.y + (otherDragUITransform.height / 2) && position.y >= otherDrag.node.position.y - (otherDragUITransform.height / 2))    
                {
                    console.log("inside")
                  //  swap = true;
                    this.dragContainer.children.forEach((d,k)=>{
                        console.log("drag"+k+"--"+d.name)
                    })

                    let draggedOption = this.dragContainer.children[this.dragContainer.children.length-1]
                    let temp = [];

                    for(let p =  this.dragContainer.children.length-1; p>childPos; p--) 
                        this.dragContainer.children[p] = this.dragContainer.children[p-1]

                    this.dragContainer.children[childPos] = draggedOption;


                   
                    this.dragContainer.children.forEach((d,k)=>{
                        console.log("aftdrag"+k+"--"+d.name)
                        /* let  te  = instantiate(d)
                        //te.removeComponent(UIDrag)
                        te.name = d.name;
                        temp.push(te)*/

                    })

                   /*  this.dragContainer.removeAllChildren()

                    temp.forEach((drag,k)=>{

                        drag.removeComponent(UIDrag)
                        drag.parent = this.dragContainer;
                        this.dragContainer.getComponent(Layout).updateLayout()
                        drag.addComponent(UIDrag);
                        this._addEventListeners(drag)
                        console.log("drag elem"+k+"--"+this.dragContainer.children[k].position)

                        this.dragContainer.getComponent(UIDragSwap).onEnable()
                    })
 */

                      break;
                    }
                  }
                }
                // if(!swap)
                // {newOption.removeComponent(UIDrag);
                // newOption.parent = this.dragContainer;
                // newOption.name = dragOption.name;
                // this.dragContainer.getComponent(Layout).updateLayout()
                // newOption.addComponent(UIDrag);
    
                // this._addEventListeners(newOption)
                // this.dragContainer.getComponent(UIDragSwap).onEnable()
                // dragOption.node.active = false;}





        }

    }
    private _containerDragEnd(drag){                
        if (!(drag.position.x <= this.dragContainer.position.x + (this._dragContainerUItranform.width / 2) && drag.position.x >= this.dragContainer.position.x - (this._dragContainerUItranform.width / 2) && drag.position.y <= this.dragContainer.position.y + (this._dragContainerUItranform.height / 2) && drag.position.y >= this.dragContainer.position.y - (this._dragContainerUItranform.height / 2)) )
        {
            for(let i=0; i< this.dragOptions.length; i++)
            {
                if(this.dragOptions[i].name == drag.name)
                {
                    this.dragOptions[i].node.active = true;
                    drag.destroy();
                    this.dragContainer.children.forEach((dragOption, i)=>{
                        dragOption.removeComponent(UIDrag);
                        this.dragContainer.getComponent(Layout).updateLayout()
                        dragOption.addComponent(UIDrag);
                    })
                    break;
                }
            }
        }

    }
    private _addEventListeners(drag) {
        
        drag.on(UIDrag.EventType.DRAG_DID_END, ()=>{
            this._containerDragEnd(drag);
        })
    }
}

