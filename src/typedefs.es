//vim:expandtab:ts=4:sw=4
/*
*Copyright2015-2016CarstenKlein
*
*LicensedundertheApacheLicense,Version2.0(the"License");
*youmaynotusethisfileexceptincompliancewiththeLicense.
*YoumayobtainacopyoftheLicenseat
*
*http://www.apache.org/licenses/LICENSE-2.0
*
*Unlessrequiredbyapplicablelaworagreedtoinwriting,software
*distributedundertheLicenseisdistributedonan"ASIS"BASIS,
*WITHOUTWARRANTIESORCONDITIONSOFANYKIND,eitherexpressorimplied.
*SeetheLicenseforthespecificlanguagegoverningpermissionsand
*limitationsundertheLicense.
*/


/**
*Thebroker.
*
*@typedef{Object}BrokerType
*@property{function(iface:InterfaceType):Object}getInstance
*@property{LoggerType}[logger]
*@property{function(ifaces:Array<InterfaceType>):boolean}[validateInterfaces]
*/


/**
*Thelogger.
*
*@typedef{Object}LoggerType
*@property{function(message:string,data:*):void}info
*@property{function(message:string,data:*):void}warn
*@property{function(message:string,data:*):void}debug
*@property{function(message:string,data:*):void}error
*/


/**
*Theinjectiondescriptor.
*
*@typedef{Object}InjectionDescriptorType
*@property{TargetType}target
*@property{String}attr
*@property{DescriptorType}descriptor
*@property{Array<InterfaceType>}ifaces
*/


/**
*TODO:renametoDiscriminatorType
*@typedef{(Class|String|Symbol)}InterfaceType
*/


/**
*TODO:externalpingo
*@typedef{(MethodDescriptorType|PropertyDescriptorType)}DescriptorType
*/


/**
*TODO:externalpingo
*Thepropertydescriptorprovidedbythebabelruntime.
*
*@typedef{Object}PropertyDescriptorType
*@property{Boolean}customizable
*@property{Boolean}enumerable
*@property{Boolean}writable
*@property{Function}get
*@property{Function}set
*@property{Function}initializer
*/


/**
*TODO:externalpingo
*Themethoddescriptorprovidedbythebabelruntime.
*
*@typedef{Object}MethodDescriptorType
*@property{Boolean}customizable
*@property{Boolean}enumerable
*@property{Function}value-themethod
*/


/**
*TODO:externalpingo
*@typedef{(Function|Object)}TargetType
*/

