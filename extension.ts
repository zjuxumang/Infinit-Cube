//% color="#359eff" weight=20 icon="\uf1b2"
namespace Cube {
    let BUS_SERVO_ENABLE=false;
    let Color_Recognize:number;
    export enum GPIO_ID{
        A0,
        A1,
        B0,
        B1,
        C0,
        C1,
        D0,
        D1,
        E0,
        E1,
        F0,
        F1,
        G0,
        G1,
        H0,
        H1
    }
    export enum Analog_Pins{
        A0,
        A1,
        B0,
        B1,
        C0,
        C1,
        D0,
        D1
    }
    export enum PORT_ID{
        //% block="端口A"
        PORTA,
        //% block="端口B"
        PORTB,
        //% block="端口C"
        PORTC,
        //% block="端口D"
        PORTD
    }
    export enum Pin_MODE{
        //% block="输入"
        INPUT_NOPULL,
        //% block="上拉输入"
        INPUT_PULLUP,
        //% block="下拉输入"
        INPUT_PULLDOWN,
        //% block="数字输出"
        OUTPUT,
        //% block="模拟输出"
        PWM,
        //% block="模拟输入(仅支持模拟引脚)"
        ADC
    }
    export enum Pin_Level{
        //% block="高"
        High,
        //% block="低"
        Low
    }
    export enum Sensor_ID{
        //% block="按钮模块"
        Button=1,
        //% block="触摸模块"
        Touch,
        //% block="手势&颜色模块"
        Gesture,
        //% block="红外光电模块"
        IR,
        //% block="超声波测距模块"
        Ultrasonar,
    }
    export enum Motor_ID{
        M1,
        M2,
        M3,
        M4
    }
    export enum Motor_Dir{
        //% block="正转"
        Forward=1,
        //% block="反转"
        Backward=2,
        //% block="刹车"
        Brake=0
    }
    export enum Move_base_dir{
        //% block="前进"
        Forward=1,
        //% block="后退"
        Backward=2,
        //% block="左转"
        Turn_left=3,
        //% block="右转"
        Turn_right=4,
        //% block="刹车"
        Brake=0
    }

    export enum IMU_AXIS{
        Yaw,
        Roll,
        Pitch
    }

    //% block="复位编程盒" advanced=true
    //% shim=Cube::Init
    export function Init() {
        return
    }

    //% block="设置引脚模式%id|%mode"
    //% shim=Cube::Set_Pin_Mode group="输入输出"
    export function Set_Pin_Mode(id:GPIO_ID,mode:Pin_MODE){
        return
    }
    //% block="数字输出 引脚%id 设为%level"
    //% shim=Cube::Set_Pin_Value group="输入输出"
    export function Set_Pin_Value(id:GPIO_ID,level:Pin_Level){
        return
    }
    //% block="模拟输出 引脚%id 设为%pwm"
    //% shim=Cube::Set_Pin_PWM group="输入输出"
    export function Set_Pin_PWM(id:GPIO_ID,pwm:number){
        return
    }
    //% block="数字读取 引脚%id"
    //% shim=Cube::Get_Pin_Value group="输入输出"
    export function Get_Pin_Value(id:GPIO_ID){
        return 0
    }

    //% block="模拟读取 引脚%id"
    //% shim=Cube::Get_ADC_Value group="输入输出"
    export function Get_ADC_Value(id:Analog_Pins){
        return 0
    }

    //% block="初始化%port|为%sensor"
    //% shim=Cube::Init_Port group="输入输出"
    export function init_port(port:PORT_ID,sensor:Sensor_ID){
        return
    }
    
    //% block="读取%port|上的%sensor"
    //% shim=Cube::Get_sensor group="输入输出"
    export function Get_sensor(port:PORT_ID,sensor:Sensor_ID){
        return 0
    }
    //% block="启动马达%id|方向%dir|速度%pwm"
    //% shim=Cube::Motor pwm.defl=0 pwm.min=0 pwm.max=255 inlineInputMode=inline
    //% group="基本功能"
    export function Motor(id:Motor_ID,dir:Motor_Dir,pwm:number){
        return
    }

    
    //% block="马达%id|%dir|速度%pwm|运行%delay毫秒后停止"
    //% shim=Cube::Motor_with_delay pwm.defl=100 pwm.min=0 pwm.max=255 delay.defl=500 inlineInputMode=inline
    //% group="基本功能"
    export function Motor_with_delay(id:Motor_ID,dir:Motor_Dir,pwm:number,delay:number){
        return
    }

    export enum SERVOS{
        S1,
        S2
    }
    //% block="设置舵机%servo角度%angle|等待%delay毫秒"
    //% group="基本功能" angle.min=0 angle.max=180
    export function setServo(servo:SERVOS,angle:number,delay:number) {
        if(servo==SERVOS.S1)
            pins.servoWritePin(AnalogPin.P8,angle);
        else if(servo==SERVOS.S2)
            pins.servoWritePin(AnalogPin.P12,angle);
        basic.pause(delay);
    }

    //% block="读取陀螺仪数据%dir"
    //% shim=Cube::Get_Imu 
    //% advanced=true
    export function Get_Imu(dir:IMU_AXIS){
        return 0
    }
    
    //% block="初始化底盘 左马达%left|右马达%right"
    //% shim=Cube::Set_move_base group="底盘控制"
    export function Set_move_base(left:Motor_ID,right:Motor_ID){
        return
    }

    //% block="底盘控制 %dir|速度%speed||运行%time毫秒后停止"
    //% shim=Cube::move_base group="底盘控制" time.defl=0 speed.defl=100 speed.min=0 speed.max=255
    //% expandableArgumentMode="toggle"
    export function move_base(dir:Move_base_dir, speed:number, time?:number){
        return
    }

    //% block="设置 左马达%left| 右马达%right 速度（±255）"
    //% left.min=-255 left.max=255 right.min=-255 right.max=255
    //% shim=Cube::move_motor group="底盘控制"
    export function move(left:number, right:number){
        return
    }

    //% block="总线舵机控制|ID %ID|角度 %value|时间 %time ms"
    //% time.defl=500 time.min=0
    //% value.min=0 value.max=180
    //% num.fieldEditor="gridpicker" num.fieldOptions.columns=4
    //% advanced=true
    export function bus_Servo(ID: number, value: number, time: number): void {
        if(!BUS_SERVO_ENABLE){
            serial.redirect(SerialPin.P8,SerialPin.P12,115200);
            BUS_SERVO_ENABLE=true;
        }
        serial.writeString("#");
        if(ID<10)
            serial.writeString("00");
        else if(ID<100)
            serial.writeString("0");
        serial.writeNumber(ID);
        serial.writeString("P");
        let pwm=Math.map(value,0,180,500,2500);
        pwm=Math.round(pwm);
        if(pwm<1000){
            serial.writeString("0");
        }
        serial.writeNumber(pwm);
        serial.writeString("T");
        if(time<1000){
            serial.writeString("0");
        }
        serial.writeNumber(time);
        serial.writeString("!");
    }

    //% block="获取测距传感器数据 编号%begin|至%end"
    //% advanced=true deprecated=true
    export function Get_VL53L0X(begin:number,end:number){
        let data=[0]
        _update_vl53l0x(begin,end);
        for (let index = 0; index < end-begin+1; index++) {
            data.push(_get_vl53l0x(index))
        }
        data.shift()
        return data
    }

    //% shim=Cube::Update_VL53L0X
    export function _update_vl53l0x(begin:number,end:number){
        return
    }
    //% shim=Cube::Get_VL53L0X
    export function _get_vl53l0x(index:number){
        return 0
    }

    //% shim=Cube::test
    export function test(){
        return 0
    }
}
