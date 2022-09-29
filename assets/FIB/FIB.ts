import { _decorator, Component, Node,instantiate, Button, UITransform, UI ,Prefab,Layout, Label} from 'cc';
import { AS } from "db://as_framework/scripts//ASComponent";
import { UIPopup } from "db://as_framework/scripts/UIPopup";
import { ReplicatedButton } from "db://as_framework/scripts/ReplicatedButton";
import { type } from 'os';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('FIB')
export class FIB extends AS(Component)  {
  @property(UIPopup) popup: UIPopup|null = null;

  @property(Prefab) private optionPrefab: Prefab = null;

  private _button: Button | null = null;

  @property(Layout) private optionsContainer: Layout | null = null;

  @property({type: String}) private optionLabel: string[] = [];

  @property private correctIndex: number = 0;

  // @property(Node) private check=  Node||null;

  // @property(Node) private =  Node||null;


  awake()
  { this._insertChild();
    this._button = this.getComponentInChildren(Button);
    this._button.addComponent(ReplicatedButton);
    this._addEventListeners();

    this.popup.node.children[0].addComponent(Button)
    this.popup.node.children[0].addComponent(ReplicatedButton)
    this.popup.node.children[0].on(Button.EventType.CLICK,()=>{
      this._onCrossClick();
    })



    var options= this.optionsContainer.getComponentsInChildren(Button);
    var seletion=null;

    options.forEach((opt, i) => {
      console.log("name",i)
       opt.node.on(Button.EventType.CLICK, ()=>{
        this._clearOptions();
        seletion=i;
        this.popup.node.children[2].getComponentInChildren(Label).string=this.optionLabel[i];
        for(let j=0;j<options.length;j++)
        {
          if(i==j) options[i].node.children[0].active=true;
          else options[j].node.children[0].active=false;
        }
       },this)
    });

    this.popup.node.children[3].addComponent(Button)
    this.popup.node.children[3].addComponent(ReplicatedButton)
    this.popup.node.children[3].on(Button.EventType.CLICK,()=>{
      this._onCheckClick(options,seletion);
    },this)
    this.lableAssigner();
  }


  private _addEventListeners() {
      this._button.node.on(Button.EventType.CLICK, this._onButtonClick, this);
  }


  _onButtonClick()
  {
    this.popup.show();
  }


  _onCrossClick()
  {
    this.popup.hide();
    this._clearOptions();

  }

  _clearOptions()
  {
    var options= this.optionsContainer.getComponentsInChildren(Button);
    //console.log(options.length)
    options.forEach((opt,j) => {
      console.log(opt.name)
      for(let i=0;i<3;i++)
        opt.node.children[i].active=false;
    });
  }

  _onCheckClick(options,seletion){

    if(seletion!=null)
    if(seletion==this.correctIndex){
    options[seletion].node.children[1].active=true;
    this._button.node.getComponentInChildren(Label).string= options[seletion].getComponentInChildren(Label).string;
    //this._onCrossClick();
    }
    else
    options[seletion].node.children[2].active=true;
  }


  _optionSelection(index)
  {
    console.log("running",index)
   this.popup.node.children[2].getComponent(Label).string=this.optionLabel[index];
  }


  _insertChild() {
    for (let i = 0; i <this.optionLabel.length; i++) {
      let addchild = instantiate(this.optionPrefab);
      addchild.addComponent(Button)
      addchild.addComponent(ReplicatedButton)
      addchild.parent = this.optionsContainer.node;
    }
  }


  lableAssigner() {
    const mcqLable = this.popup.node.children[1].getComponentsInChildren(Label);
    mcqLable.forEach((btnLable, i) => {
      if (this.optionLabel.length <= i) {
        btnLable.node.parent.active = false;
      } else btnLable.string = this.optionLabel[i];
    });
  }
}

