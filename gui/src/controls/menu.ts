/// <reference path="../../../dist/preview release/babylon.d.ts"/>

module BABYLON.GUI {
    export interface IMenuData {
        id: string;
        title: string;
        items?: IMenuItemData[];
    }
    
    export interface IMenuItemData {
        id: string;
        text: string;
        style?: IMenuStyleData;
        subMenu?: IMenuData;
    }

    export interface IMenuStyleData {
        text?: string,
        fontFamily?: string,
        fontSize?: string | number,
        fontStyle?: string,
        textColor?: string,
        borderColor?: string,
        backgroundColor?: string,
        borderThickness?: number,
        height?: string,
        width?: string,
        textHAlign?: number,
        textVAlign?: number,
        textWrapping?: boolean,
        cornerRadius? : number,
        textPadding?: string,
        textPaddingTop?: string,
        textPaddingRight?: string,
        textPaddingBottom?: string,
        textPaddingLeft?: string,
        padding?: string,
        paddingTop?: string,
        paddingRight?: string,
        paddingBottom?: string,
        paddingLeft?: string,
        shadowBlur?: number,
        shadowOffsetX?: number,
        shadowOffsetY?: number,
        shadowColor?: string
    }

    interface IControlMap {
        [id:string]:Nullable<Control>;
    }

    class MenuStyle {
        public text: string;
        public fontSize: string | number = 18;
        public fontStyle = "";
        public fontFamily: string;
        public textColor = "Black";
        public color: string;
        public thickness = 1;
        public background: string;
        public height = "40px";
        public width: string | number = "100%";
        public cornerRadius = 0;
        public paddingTop = "2px";
        public paddingRight = "2px";
        public paddingBottom = "2px";
        public paddingLeft = "2px";
        public textPaddingTop = "0px";
        public textPaddingRight = "0px";
        public textPaddingBottom = "0px";
        public textPaddingLeft = "10px";
        public textHAlign = Control.HORIZONTAL_ALIGNMENT_LEFT;
        public textVAlign = Control.VERTICAL_ALIGNMENT_CENTER;
        public textWrapping = false;
        public shadowBlur: number;
        public shadowOffsetX: number;
        public shadowOffsetY: number;
        public shadowColor: string;
        
        constructor(options?: IMenuStyleData){
            this.update(options);
        }

        public clone(): MenuStyle{
            var style = new MenuStyle();
            style.copyFrom(this);
            return style;
        }

        public copyFrom(style: MenuStyle){
            this.text = style.text;
            this.fontSize = style.fontSize;
            this.fontFamily = style.fontFamily;
            this.textColor = style.textColor;
            this.color = style.color;
            this.thickness = style.thickness;
            this.background = style.background;
            this.height = style.height;
            this.width = style.width;
            this.cornerRadius = style.cornerRadius;
            this.paddingTop = style.paddingTop;
            this.paddingRight = style.paddingRight;
            this.paddingBottom = style.paddingBottom;
            this.paddingLeft = style.paddingLeft;
            this.textPaddingTop = style.textPaddingTop;
            this.textPaddingRight = style.textPaddingRight;
            this.textPaddingBottom = style.textPaddingBottom;
            this.textPaddingLeft = style.textPaddingLeft;
            this.textHAlign = style.textHAlign;
            this.textVAlign = style.textVAlign;
            this.textWrapping = style.textWrapping;
            this.shadowBlur = style.shadowBlur;
            this.shadowOffsetX = style.shadowOffsetX;
            this.shadowOffsetY = style.shadowOffsetY;
            this.shadowColor = style.shadowColor;
        }

        public update(options?: IMenuStyleData){

            if(options){
                if(options.text){
                    this.text = options.text;
                }
                if(options.textHAlign){
                    this.textHAlign = options.textHAlign;
                    if(this.textHAlign !== BABYLON.GUI.Container.HORIZONTAL_ALIGNMENT_LEFT){
                        this.textPaddingLeft = "0px";
                    }
                    if(this.textHAlign === BABYLON.GUI.Container.HORIZONTAL_ALIGNMENT_RIGHT){
                        this.textPaddingRight = "10px";
                    }
                }

                options.fontFamily ? this.fontFamily = options.fontFamily : null;
                options.fontSize ? this.fontSize = options.fontSize : null;
                options.fontStyle ? this.fontStyle = options.fontStyle : null;

                if(options.borderColor){
                    this.color = options.borderColor;
                }
                if(options.textColor){
                    this.textColor = options.textColor; 
                }
                if(options.backgroundColor){
                    this.background = options.backgroundColor
                }

                if(options.height != null && options.height != undefined){
                    this.height = options.height;
                }
                if(options.width != null && options.width != undefined){
                    this.width = options.width;
                }

                if(options.cornerRadius != null && options.cornerRadius != undefined){
                    this.cornerRadius = options.cornerRadius;
                }

                if (options.padding != null && options.padding != undefined) {
                    this.paddingTop = options.padding;
                    this.paddingRight = options.padding;
                    this.paddingBottom = options.padding;
                    this.paddingLeft = options.padding;
                }
                if (options.paddingTop != null && options.paddingTop != undefined) {
                    this.paddingTop = options.paddingTop;
                }
                if (options.paddingRight != null && options.paddingRight != undefined) {
                    this.paddingRight = options.paddingRight;
                }
                if (options.paddingBottom != null && options.paddingBottom != undefined) {
                    this.paddingBottom = options.paddingBottom;
                }
                if (options.paddingLeft != null && options.paddingLeft != undefined) {
                    this.paddingLeft = options.paddingLeft;
                }

                if (options.textPadding != null && options.textPadding != undefined) {
                    this.textPaddingTop = options.textPadding;
                    this.textPaddingRight = options.textPadding;
                    this.textPaddingBottom = options.textPadding;
                    this.textPaddingLeft = options.textPadding;
                }

                if (options.textPaddingTop != null && options.textPaddingTop != undefined) {
                    this.textPaddingTop = options.textPaddingTop;
                }
                if (options.textPaddingRight != null && options.textPaddingRight != undefined) {
                    this.textPaddingRight = options.textPaddingRight;
                }
                if (options.textPaddingBottom != null && options.textPaddingBottom != undefined) {
                    this.textPaddingBottom = options.textPaddingBottom;
                }
                if (options.textPaddingLeft != null && options.textPaddingLeft != undefined) {
                    this.textPaddingLeft = options.textPaddingLeft;
                }

                if(options.borderThickness !== undefined && options.borderThickness !== null){
                    this.thickness = options.borderThickness;
                }
                if(options.textWrapping !== undefined && options.textWrapping !== null){
                    this.textWrapping = options.textWrapping;
                }

                if(options.shadowBlur !== undefined && options.textWrapping !== null){
                    this.shadowBlur = options.shadowBlur;
                }
                if(options.shadowOffsetX !== undefined && options.shadowOffsetX !== null){
                    this.shadowOffsetX = options.shadowOffsetX;
                }
                if(options.shadowOffsetY !== undefined && options.shadowOffsetY !== null){
                    this.shadowOffsetY = options.shadowOffsetY;
                }
                if(options.shadowColor !== undefined && options.shadowColor !== null){
                    this.shadowColor = options.shadowColor;
                }
            }
        }

        public isEqualTo(other:MenuStyle):boolean{         
            return (
                this.text == other.text &&
                this.fontStyle == other.fontStyle &&
                this.fontFamily == other.fontFamily &&
                this.color == other.color &&
                this.thickness == other.thickness &&
                this.background == other.background &&
                this.height == other.width &&
                this.width == other.width &&
                this.cornerRadius == other.cornerRadius &&
                this.paddingTop == other.paddingTop &&
                this.paddingRight == other.paddingRight &&
                this.paddingBottom == other.paddingBottom &&
                this.paddingLeft == other.paddingLeft &&
                this.textPaddingTop == other.textPaddingTop &&
                this.textPaddingRight == other.textPaddingRight &&
                this.textPaddingBottom == other.textPaddingBottom &&
                this.textPaddingLeft == other.textPaddingLeft &&
                this.textHAlign == other.textHAlign &&
                this.textVAlign == other.textVAlign &&
                this.shadowBlur == other.shadowBlur &&
                this.shadowOffsetX == other.shadowOffsetX &&
                this.shadowOffsetY == other.shadowOffsetY &&
                this.shadowColor == other.shadowColor &&
                this.textWrapping == other.textWrapping
            );
        }
    }
    
    export class Menu extends Rectangle {
    
        public showPanel: (panel: StackPanel) => void;
        public hidePanel: (panel: StackPanel) => void;
        
        public panels: Array<StackPanel> = [];
        public currentPanel: StackPanel;

        private _isVertical = true;

        private _buttonsMap:IControlMap = {};
        private _buttons:Array<Button> = [];
        private _buttonsSubmenu:Array<Button> = [];
        private _buttonStyles:Array<MenuStyle> = [];
        
        private _headerControls:Array<Control> = [];
        private _navForwardControls:Array<Control> = [];
        private _navBackControls:Array<Control> = [];
        
        private _headerStyle: MenuStyle;
        private _itemStyle: MenuStyle;
        private _forwardButtonStyle: MenuStyle;
        private _backButtonStyle: MenuStyle;
        private _itemSelectedStyle: MenuStyle;
        private _itemHoveredStyle: MenuStyle;

        private _headerHidden = false;
        private _selectedItem: Nullable<Control>;

        private _itemPointerUpAnimation: () => void;
        private _itemPointerDownAnimation: () => void;

        private _itemPointerOutAnimation: () => void;
        private _itemPointerEnterAnimation: () => void;

        set itemPointerUpAnimation(value: () => void){
            this._itemPointerUpAnimation = value;
            var buttons = this._buttons;
            
            for(var i = 0; i < buttons.length; i++){
                var button = buttons[i];
                button.pointerUpAnimation = value;
            }
        }

        get itemPointerUpAnimation(): () => void {
            return this._itemPointerUpAnimation;
        }

        set itemPointerDownAnimation(value: () => void){          
            this._itemPointerDownAnimation = value;
            var buttons = this._buttons;

            for(var i = 0; i < buttons.length; i++){
                var button = buttons[i];
                button.pointerDownAnimation = value;
            }
        }

        get itemPointerDownAnimation(): () => void {
            return this._itemPointerDownAnimation;
        }

        set itemPointerEnterAnimation(value: () => void){
            this._itemPointerEnterAnimation = value;
            var buttons = this._buttons;
            
            for(var i = 0; i < buttons.length; i++){
                var button = buttons[i];
                button.pointerEnterAnimation = value;
            }
        }

        get itemPointerEnterAnimation(): () => void {
            return this._itemPointerEnterAnimation;
        }

        set itemPointerOutAnimation(value: () => void){
            this._itemPointerOutAnimation = value;
            var buttons = this._buttons;
            
            for(var i = 0; i < buttons.length; i++){
                var button = buttons[i];
                button.pointerOutAnimation = value;
            }
        }

        get itemPointerOutAnimation(): () => void {
            return this._itemPointerOutAnimation;
        }

        set isVertical(value:boolean){
            this._isVertical = value;
            if(this.panels && this.panels.length > 0){
                this.panels[0].isVertical = value;
            }
        }
        get isVertical(): boolean {
            return this._isVertical;
        }

        constructor(name: string, 
            style?: IMenuStyleData,
        ) {

            super(name);

            this._itemStyle = new MenuStyle(style);

            this._headerStyle = new MenuStyle(style);
            this._headerStyle.update({
                textHAlign: Control.HORIZONTAL_ALIGNMENT_CENTER
            });

            this._forwardButtonStyle = new MenuStyle(style);
            this._forwardButtonStyle.update({
                text:">", 
                padding:"10px", 
                //paddingRight:"10px", 
               // borderThickness: 0
                width:"40px"
            });

            this._backButtonStyle = new MenuStyle(style);
            this._backButtonStyle.update({
                text:"<",
                padding:"2px", 
                //paddingLeft:"10px", 
                //borderThickness: 0,
                width:"40px"
            });

            this.thickness = 0;

            this.showPanel = (panel:StackPanel) => {
                this.addControl(panel);
            };
       
            this.hidePanel = (menu) => {
                this.removeControl(menu);
            };

        }

        private _hideHeader(header:Container){
            header.children[0].isVisible = false;
            header.children[0].height = "0px";
            if(header.children.length == 1){
                header.height = "0px";
            }
            if(header.parent){
                header.parent._markAllAsDirty();
            }
        }
        private _showHeader(header:Container){
            header.children[0].isVisible = true;
            this._styleHeader(header);
            if(header.parent){
                header.parent._markAllAsDirty();
            }
        }

        public hideHeader(){
            this._headerHidden = true;
            for(var i = 0; i < this._headerControls.length; i++){
                this._hideHeader(<Container>this._headerControls[i]);
            }
        }

        public showHeader(){
            this._headerHidden = false;
            for(var i = 0; i < this._headerControls.length; i++){
                this._showHeader(<Container>this._headerControls[i]);
            }
        }

        public show() {
            if (this._host) {
                this._host.addControl(this);
            }
        }
    
        public hide() {
            if (this._host) {
                this._host.removeControl(this);
            }
        }

        private _getItemStyle(item:Control): MenuStyle {
            var index = this._buttons.indexOf(<Button>item);
            return this._buttonStyles[index];
        }

        private _selectItem(eventData:Vector2WithInfo, eventState:EventState){            
            var button = eventState.target;
            if(button == this._selectedItem){
                return;
            }

            var itemStyle = this._getItemStyle(button);
            var selectedStyle = this._itemSelectedStyle;

            if(itemStyle.isEqualTo(selectedStyle)){
                return;
            }

            if(this._selectedItem){
                var defaultStyle = this._getItemStyle(this._selectedItem);
                this._styleItem(this._selectedItem, defaultStyle);
            }

            //don't select submenu button
            if(this._buttonsSubmenu.indexOf(button) != -1){
                this._selectedItem = null;
                return;
            }

            this._styleItem(button, selectedStyle);
            this._selectedItem = <Button>button;      
        }

        private _pointerEnterItem(control:Control, eventState:EventState){            
            if(control == this._selectedItem){
                return;
            } 
            var itemStyle = this._getItemStyle(control);
            var hoverStyle = this._itemHoveredStyle;

            if(itemStyle.isEqualTo(hoverStyle)){
                return;
            }

            this._styleItem(control, hoverStyle);    
        }

        private _pointerOutItem(control:Control, eventState:EventState){            
            if(control == this._selectedItem){
                return;
            }
            var itemStyle = this._getItemStyle(control);
            var hoverStyle = this._itemHoveredStyle;

            if(itemStyle.isEqualTo(hoverStyle)){
                return;
            }

            this._styleItem(control, itemStyle);    
        }
        
        private _createItem(itemData:IMenuItemData) {
            var button = new Button(itemData.id);
            var textBlock = new TextBlock(name + "_text", itemData.text);
            
            button.addControl(textBlock);
            this._styleItem(button);

            this._itemPointerDownAnimation ? button.pointerDownAnimation = this._itemPointerDownAnimation : null;
            this._itemPointerUpAnimation ? button.pointerUpAnimation = this._itemPointerUpAnimation : null;
            this._itemPointerEnterAnimation ? button.pointerEnterAnimation = this._itemPointerEnterAnimation : null;
            this._itemPointerOutAnimation ? button.pointerOutAnimation = this._itemPointerOutAnimation : null;
            
            if(this._itemHoveredStyle){
                button.onPointerOutObservable.add(this._pointerOutItem, -1, false, this);
                button.onPointerEnterObservable.add(this._pointerEnterItem, -1, false, this);
            }
            if(this._itemSelectedStyle){
                button.onPointerUpObservable.add(this._selectItem, -1, false, this);
            }

            if (itemData.subMenu) {
                var forwardStyle = this._forwardButtonStyle;
                var forward = new TextBlock(name + "_expand", forwardStyle.text);
                this._styleForwardControl(forward);
                button.addControl(forward);
                this._navForwardControls.push(forward);
                //this._buttonsSubmenu[name] = button;
                this._buttonsSubmenu.push(button);
            }

            if(itemData.style){
                var style = this._itemStyle.clone();
                style.update(itemData.style);
                this._buttonStyles.push(style);
                this._styleItem(button, style);
            }else{
                this._buttonStyles.push(this._itemStyle);
            }

            this._buttons.push(button);
            this._buttonsMap[itemData.id] = button;

            return button;
        }
    
        private _getNextMenuFunc = (panelToShow:StackPanel, panelToHide:StackPanel) => {
            return () => {
                this.currentPanel = panelToShow;
                this.showPanel(panelToShow);
                this.hidePanel(panelToHide);
            }
        }

        private _styleItem(control:Control, style?:MenuStyle){           
            var itemStyle = style ? style: this._itemStyle;
            var button = <Button>control;
            var textBlock = <TextBlock>button.children[0];

            textBlock.textWrapping = true;
            textBlock.textHorizontalAlignment = itemStyle.textHAlign;
            textBlock.textVerticalAlignment = itemStyle.textVAlign;
            textBlock.paddingLeft = itemStyle.textPaddingLeft;
            textBlock.paddingRight = itemStyle.textPaddingRight;
            textBlock.color = itemStyle.textColor;

            button.height = itemStyle.height;
            button.thickness = itemStyle.thickness;
            button.cornerRadius = itemStyle.cornerRadius;
            button.fontSize = itemStyle.fontSize;
            button.fontStyle = itemStyle.fontStyle;
            button.background = itemStyle.background;
            
            itemStyle.width ? button.width = itemStyle.width : null;
            itemStyle.height ? button.height = itemStyle.height : null;
            itemStyle.fontFamily ? button.fontFamily = itemStyle.fontFamily : null;
            itemStyle.color ? button.color = itemStyle.color : null;
            itemStyle.paddingTop ? button.paddingTop = itemStyle.paddingTop : null;
            itemStyle.paddingRight ? button.paddingRight = itemStyle.paddingRight : null;
            itemStyle.paddingBottom ? button.paddingBottom = itemStyle.paddingBottom : null;
            itemStyle.paddingLeft ? button.paddingLeft = itemStyle.paddingLeft : null;
            
        }

        private _styleHeader(control:Control, style?:MenuStyle){          
            var headerStyle = style ? style : this._headerStyle;
            var header = <Container>control;
            var headerRect = <Rectangle>header.children[0];

            headerRect.cornerRadius = headerStyle.cornerRadius;
            headerRect.thickness = headerStyle.thickness;

            headerRect.paddingTop = headerStyle.paddingTop;
            headerRect.paddingRight = headerStyle.paddingRight;
            headerRect.paddingBottom = headerStyle.paddingBottom;
            headerRect.paddingLeft = headerStyle.paddingLeft;
            headerStyle.height ? headerRect.height = headerStyle.height : null;

            headerStyle.height ? header.height = headerStyle.height : null;   
            headerStyle.width ? header.width = headerStyle.width : null;    
            headerStyle.color ? headerRect.color = headerStyle.color: null;
            headerStyle.background ? headerRect.background = headerStyle.background: null;

            if(headerStyle.shadowBlur != undefined && headerStyle.shadowBlur != null){
                headerRect.shadowBlur = headerStyle.shadowBlur;
            }
            if(headerStyle.shadowOffsetX != undefined && headerStyle.shadowOffsetX != null){
                headerRect.shadowOffsetX = headerStyle.shadowOffsetX;
            }
            if(headerStyle.shadowOffsetY != undefined && headerStyle.shadowOffsetY != null){
                headerRect.shadowOffsetY = headerStyle.shadowOffsetY;
            }
            if(headerStyle.shadowColor != undefined && headerStyle.shadowColor != null){
                headerRect.shadowColor = headerStyle.shadowColor;
            }

            var textBlock = <TextBlock>headerRect.children[0];

            headerStyle.fontFamily ? textBlock.fontFamily = headerStyle.fontFamily : null;
            headerStyle.color ? textBlock.color = headerStyle.color : null;    

            textBlock.fontSize = headerStyle.fontSize;
            textBlock.fontStyle = headerStyle.fontStyle;
            textBlock.color = headerStyle.textColor;
            textBlock.textWrapping = true;

            textBlock.textHorizontalAlignment = headerStyle.textHAlign;
            textBlock.textVerticalAlignment = headerStyle.textVAlign;
            textBlock.paddingTop = headerStyle.textPaddingTop;
            textBlock.paddingRight = headerStyle.textPaddingRight;
            textBlock.paddingBottom = headerStyle.textPaddingBottom;
            textBlock.paddingLeft = headerStyle.textPaddingLeft;           
        }

        private _styleBackControl(control:Control, style?:MenuStyle){       
            var headerStyle = style ? style : this._headerStyle;
            var buttonStyle = this._backButtonStyle;
            var backButton = <Button>control;

            headerStyle.color ? backButton.color = headerStyle.color : null;         
            backButton.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;  
            backButton.thickness = buttonStyle.thickness;
            backButton.width = buttonStyle.width;
            backButton.height = buttonStyle.height;

            backButton.paddingTop = buttonStyle.paddingTop;
            backButton.paddingRight = buttonStyle.paddingRight;
            backButton.paddingBottom = buttonStyle.paddingBottom;
            backButton.paddingLeft = buttonStyle.paddingLeft;

            //backButton.height = buttonHeight;
            //backButton.width = buttonHeight;

            //backButton.width = backProps.width;
            //backButton.thickness = 0;
            buttonStyle.fontFamily ? backButton.fontFamily = buttonStyle.fontFamily : null;

            var backButtonText = <TextBlock>backButton.children[0];
            
            backButtonText.fontSize = buttonStyle.fontSize;
            backButtonText.fontStyle = buttonStyle.fontStyle;
            //backButtonText.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
            //backButtonText.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER; 
            backButtonText.color = headerStyle.textColor;
            backButtonText.paddingTop = buttonStyle.paddingTop;
            backButtonText.paddingRight = buttonStyle.paddingRight;
            backButtonText.paddingBottom = buttonStyle.paddingBottom;
            backButtonText.paddingLeft = buttonStyle.paddingLeft;

        }

        private _styleForwardControl(control:Control, style?:MenuStyle){                 
            var forwardStyle = style ? style : this._forwardButtonStyle;
            var forward = <TextBlock>control;

            forward.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_CENTER;
            forward.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
            forward.paddingRight = forwardStyle.paddingRight;
            forward.color = forwardStyle.textColor;
            forward.fontSize = forwardStyle.fontSize;
            forward.fontStyle = forwardStyle.fontStyle;
            forward.paddingTop = forwardStyle.paddingTop;
            forward.paddingRight = forwardStyle.paddingRight;
            forward.paddingBottom = forwardStyle.paddingBottom;
            forward.paddingLeft = forwardStyle.paddingLeft;
            forwardStyle.fontFamily ? forward.fontFamily = forwardStyle.fontFamily : null;
        }           
        
        private _createMenu(menuData:IMenuData, parentMenu?: StackPanel) { 
            var items = menuData.items;
            
            var header = new Container();
            this._headerControls.push(header);

            var headerRect = new Rectangle('headerRect');
            headerRect.isPointerBlocker = true;
            header.addControl(headerRect);

            var textBlock = new TextBlock("menuheader", menuData.title);
            headerRect.addControl(textBlock);

            var panel = new StackPanel(menuData.id);
            panel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;

            if(this.panels.length == 0){
                panel.isVertical = this._isVertical;
            }

            this._styleHeader(header);
            panel.addControl(header);

            var that = this;    
    
            panel.onPointerUpObservable.add(function (eventData, eventState) {
                that.onPointerUpObservable.notifyObservers(eventData, -1, eventState.target, eventState.currentTarget);
            });
            
            if (parentMenu) {
                var backButton = Button.CreateSimpleButton("backbutton", this._backButtonStyle.text);
                backButton.onPointerUpObservable.add(this._getNextMenuFunc(parentMenu, panel), -1, false, this);
                header.addControl(backButton);
                this._navBackControls.push(backButton);
                this._styleBackControl(backButton);
            }
            
            if(items){
                var itemData:IMenuItemData;
                for (var i = 0; i < items.length; i++) {
                    itemData = items[i];
                    
                    var button = this._createItem(itemData);
                    panel.addControl(button);

                    if (itemData.subMenu) {
                        var submenu = this._createMenu(itemData.subMenu, panel);
                        button.onPointerUpObservable.add(this._getNextMenuFunc(submenu, panel), -1, false, this);
                    }
                }
            }

            if(this._headerHidden){
                this._hideHeader(header);
            }
    
            this.addControl(panel);
            this.panels.unshift(panel);
            this.hidePanel(panel);
    
            that.currentPanel = panel;
    
            return panel;
        }
    
        public getChildByName(name: string): BABYLON.Nullable<Control> {    
            for (var panel of this.panels) {
                var child = panel.getChildByName(name);
                if (child) {
                    return child;
                }
            }
    
            return null;
        }  
    
        public getButtonByID(id:string):Button {
            return <Button>this._buttonsMap[id];
        }

        public hideItem(itemID:string){
            var button = this._buttonsMap[itemID];

            if(button){
                button.isVisible = false;
                button.width = "0px";
                button.height = "0px";
            }
        }

        public showItem(itemID:string){
            var button = this._buttonsMap[itemID];
            
            if(button){
                button.isVisible = true;
                this._styleItem(button);
            }
        }

        public setItemStyle(style: IMenuStyleData){        
            this._itemStyle.update(style);
            var buttons = this._buttons;
            
            for(var i = 0; i < buttons.length; i++){
                var button = buttons[i];
                this._styleItem(button);
            }
        }

        public setHeaderStyle(style: IMenuStyleData){
            this._headerStyle.update(style);
            var headers = this._headerControls;

            for(var i = 0; i < headers.length; i++){
                this._styleHeader(headers[i]);
            }
        }

        public setNavBackStyle(style: IMenuStyleData){
            this._backButtonStyle.update(style);
            var controls = this._navBackControls;

            for(var i = 0; i < controls.length; i++){
                this._styleBackControl(<Button>controls[i]);
            }
        }

        public setNavForwardStyle(style: IMenuStyleData){
            this._forwardButtonStyle.update(style);
            var controls = this._navForwardControls;

            for(var i = 0; i < controls.length; i++){
                this._styleForwardControl(controls[i]);
            }
        }

        public setItemSelectedStyle(style: IMenuStyleData){
            if(!this._itemSelectedStyle){
                this._itemSelectedStyle = this._itemStyle.clone();
            }
            this._itemSelectedStyle.update(style);
            
            var buttons = this._buttons;
            
            for(var i = 0; i < buttons.length; i++){
                var button = buttons[i];
                button.onPointerUpObservable.removeCallback(this._selectItem);
                button.onPointerUpObservable.add(this._selectItem, -1, false, this);
            }
        }

        public setItemHoveredStyle(style: IMenuStyleData){
            if(!this._itemHoveredStyle){
                this._itemHoveredStyle = this._itemStyle.clone();
            }
            this._itemHoveredStyle.update(style);
            var buttons = this._buttons;
            
            for(var i = 0; i < buttons.length; i++){
                var button = buttons[i];
                button.onPointerOutObservable.removeCallback(this._pointerOutItem);
                button.onPointerEnterObservable.removeCallback(this._pointerEnterItem);
                button.onPointerOutObservable.add(this._pointerOutItem, -1, false, this);
                button.onPointerEnterObservable.add(this._pointerEnterItem, -1, false, this);
            }
        }
        
        public loadMenuData(menuData: IMenuData){
            this._createMenu(menuData);

            if (this.panels.length > 0) {
                this.showPanel(this.panels[0]);
            }
        }

        private _getCurrentPanel(): StackPanel{
            var panels = this.panels;
            if (panels.length == 0) {
                var panel = new StackPanel();
                panel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
                panel.isVertical = this._isVertical;
                this.panels.unshift(panel);
                this.showPanel(panel);
                this.currentPanel = panel;
            }
            return this.currentPanel;
        }

        public addControlToMenu(control:Control, subMenuID?: string){
            var addToPanel: StackPanel = null!;
            var panels = this.panels;

            if (subMenuID) {
                for (var panel of panels) {
                    if (panel.name == subMenuID) {
                        addToPanel = panel;
                    }
                }
            } else {
                addToPanel = this._getCurrentPanel();
            }

            if (addToPanel){
                addToPanel.addControl(control);
            }
        }
    
        public addItem(itemData: IMenuItemData, subMenuID?: string) {
            var addToPanel: StackPanel = null!;
            var panels = this.panels;

            if (subMenuID) {
                for (var panel of panels) {
                    if (panel.name == subMenuID) {
                        addToPanel = panel;
                    }
                }
            } else {
                addToPanel = this._getCurrentPanel();
            }

            if (addToPanel){
                var button = this._createItem(itemData);
                addToPanel.addControl(button);
                if (itemData.subMenu) {
                    var submenu = this._createMenu(itemData.subMenu, addToPanel);
                    button.onPointerUpObservable.add(this._getNextMenuFunc(submenu, addToPanel), -1, false, this);
                }
            }
        }

        dispose(){

            super.dispose();

            this._buttons.length = 0;
            this._buttonsSubmenu.length = 0;
            this._buttonStyles.length = 0;
            this._headerControls.length = 0;
            this._navForwardControls.length = 0;
            this._navBackControls.length = 0;
            
            for(var key in this._buttonsMap){
                this._buttonsMap[key] = null;
            }

        }
    
    }
}