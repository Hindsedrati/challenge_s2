import EventList from "../components/Event/EventList.js";
import Header from "../components/Header/Header.js";
import MiniReact from "../core/MiniReact.js";
import navlinks from "../utils/navlinks.js";


const header = MiniReact.createElement(Header,{
    links: navlinks,
})
const cards = [
    {
    "link": "https://pinterest.com/morbi/non.js?ornare=quis&consequat=augue&lectus=luctus&in=tincidunt&est=nulla&risus=mollis&auctor=molestie&sed=lorem&tristique=quisque&in=ut&tempus=erat&sit=curabitur&amet=gravida&sem=nisi&fusce=at&consequat=nibh&nulla=in&nisl=hac&nunc=habitasse&nisl=platea&duis=dictumst&bibendum=aliquam&felis=augue&sed=quam&interdum=sollicitudin&venenatis=vitae&turpis=consectetuer&enim=eget&blandit=rutrum&mi=at&in=lorem&porttitor=integer&pede=tincidunt&justo=ante&eu=vel&massa=ipsum&donec=praesent&dapibus=blandit&duis=lacinia&at=erat&velit=vestibulum&eu=sed&est=magna&congue=at&elementum=nunc&in=commodo&hac=placerat&habitasse=praesent&platea=blandit&dictumst=nam&morbi=nulla&vestibulum=integer&velit=pede&id=justo&pretium=lacinia&iaculis=eget&diam=tincidunt&erat=eget&fermentum=tempus",
    "target": "_blank",
    "date": "7/22/2024",
    "title": "Ms",
    "time": "3:13 AM",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    "location": "PO Box 58583",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJJSURBVDjLpVM9ixNRFD1vvhLzxUiMCitiCjFWwrJuYaGQICgIgl2wSCWSIr9AFAsbQcVfYGEj9kICizGFgoUIIUENBDFrkLiDukw22fke7501MetHtY+58x6Pd+455973RBiG2MuQsMehzBa9Xu+57/tFCnieB9d15+E4zjxs2+a5WalUSowTbIHA5zRNa+VyuejQn2PRpqqqaLVaGAwGpVqt1owUEOMtXdcxGo0Qi8XmoEUgr4fDITKZDPL5PJPeoO2m6HQ6EXs2m4VpmrvkshUGCiEgy3LEnk6nkUwm0Wg00O/3Swqzs3T2yofi8XgUD+pbSJOYqeNhf0rDl41tCMlHKjFGEG7hh1mAZw7vKsw0mUxgGEZUIGYMggDb0wyKqydweTmFZ6+HuHn15K66PG4ZeBGcX5EoQZE3OBF3oN1uo9vtYmq7+D72osNrb77OgRZtmTZgbDpkLYDCrOyVgxNwsGdJIt9UQ9cPcL+6TKqoqJRApn+CSs84c+LsJJgBWXqhUIjmdz0JFqm48/QTKBc8ShRQhLO20pdQfyngDnCCWes4vPc2bN+DLKkMgcCOspCVhAEp5gvmQbEsq1Gv1y8s3LJoHrtnoQoF1UtpeIGzc+uZmHzHFQ33nqzjmzmBUi6XL/7rjl+5/TKkzoP6gUdvr+NA4iipkGBMP+Pa6Ye0ilOhnd9v4a9Hosg4dhg4lBqjdGoVurYUidi0lnAw6SGh0RmyJP73nFeqa6+OH9l3Ro/pJDlDNlwIKq4Iqdhiig/rH7FhuvgJMpVtkQoe5WAAAAAASUVORK5CYII="
}, {
    "link": "http://t-online.de/nulla.xml?massa=ut&tempor=nulla&convallis=sed&nulla=accumsan&neque=felis&libero=ut&convallis=at&eget=dolor&eleifend=quis&luctus=odio&ultricies=consequat&eu=varius&nibh=integer&quisque=ac&id=leo&justo=pellentesque&sit=ultrices&amet=mattis&sapien=odio&dignissim=donec&vestibulum=vitae&vestibulum=nisi&ante=nam&ipsum=ultrices&primis=libero&in=non&faucibus=mattis&orci=pulvinar&luctus=nulla&et=pede&ultrices=ullamcorper&posuere=augue&cubilia=a&curae=suscipit&nulla=nulla&dapibus=elit&dolor=ac&vel=nulla&est=sed&donec=vel&odio=enim&justo=sit&sollicitudin=amet&ut=nunc&suscipit=viverra&a=dapibus&feugiat=nulla&et=suscipit&eros=ligula&vestibulum=in&ac=lacus&est=curabitur&lacinia=at&nisi=ipsum&venenatis=ac&tristique=tellus&fusce=semper&congue=interdum&diam=mauris&id=ullamcorper&ornare=purus&imperdiet=sit&sapien=amet&urna=nulla&pretium=quisque&nisl=arcu&ut=libero&volutpat=rutrum&sapien=ac",
    "target": "_top",
    "date": "7/22/2024",
    "title": "Dr",
    "time": "12:24 AM",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "location": "PO Box 62538",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALNSURBVDjLpZLZT1NBFMb5N3zx2RcTedGYGB6MLyZuSTWoiVgMimFL2KRQUKsClR1MKbKVpUhbBKmQlhbK0pQKpFDaAtLShQKytdTblrJchM97G3PVYIyJJ/kyZ86Z+c2ZMxMBIOJ/dCwwJCm6qO94qpns4WxN93HJyd4cUidNXVc1pHZ3v805/1eAVlZQbVZz9petY9hcc8Dv94EgvFhZNMOsk6CvPn5bWp6U90fAsCS/0m4Qwudxw+r24f2gC9Wds6iSzaBVaceUbR0uqx6KuscQ5cdl/gZQtfIvGHoySO+GC1rjKrqGXLAv++H1B+Hxb8O65Eer2o4PI07MG5UQv7wdqitIiGQAA81ZigUq8XlxCzKNE7T5CAK2L2vYpXxawSOgptcOncmNfnE6anLvtDKAwZbktVW3BWLVAuaok0MHRwiGQhA0irBBgQJ7e+hUDUJrI1DcboJlQoo6LsvFADTNSbs+7wqK2kzY2CHh2zvEPpXIfs6DuEuOrGc8qPXjsBAk0gTjWHKNo5F7c4cB9NXG73o3HeCJjFgKkhTkEMtEAK9KSsObtUYzPAeAwUsiueIT3I4RNGSzfgI6y2KcDosSFTITRhYIrFKXXg6QUAyPwrnlx/o3QKrvQqqQjUdl13G/8BJSsqIIBtCUHyMalnKgN9nAl1nhoRrmI4HAISXK7xiVgNcRi94ZAaZX1SjvT0B0+WmcSzxREgY0FCaeaXkRvTNvaEGbchKvZfMwur4iSPUjGCIRW3QZcksF5HNV4RcqGXiI8oF4GrDLfKRaXiznHf8W5saqMTRhQIFoDE+qRpFeocMVbiQUM/X41T6aBTTg938tyL2XV8u5EZQL72JKkw/nnBjO2SZEpZxEsfoBCtXs8OZCFft4BQwkL/ZsZSar/U3aNbcw4+oOLXZKpJ9Vcgql6rjwyfRIz5ke/IuoxXxKAbrsHyOfjn8HcjT9RjDIr5sAAAAASUVORK5CYII="
}, {
    "link": "https://bigcartel.com/morbi/sem/mauris/laoreet/ut/rhoncus.html?at=lorem&vulputate=id&vitae=ligula&nisl=suspendisse&aenean=ornare&lectus=consequat&pellentesque=lectus&eget=in&nunc=est&donec=risus&quis=auctor&orci=sed&eget=tristique&orci=in&vehicula=tempus&condimentum=sit&curabitur=amet&in=sem&libero=fusce&ut=consequat&massa=nulla&volutpat=nisl&convallis=nunc&morbi=nisl&odio=duis&odio=bibendum&elementum=felis&eu=sed&interdum=interdum&eu=venenatis&tincidunt=turpis&in=enim&leo=blandit",
    "target": "_blank",
    "date": "7/22/2024",
    "title": "Mr",
    "time": "5:26 AM",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "location": "Room 296",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJiSURBVDjLjZJNiI1RGMd/59x35l5T7x2DGRGJ0CBfpUlRJMlCSRZsUExTsxpr1lIWyupakIUFFnbSNAnJRlJMhhmM7zHkcr/vvO95zzmPxR3urHRPnc7p6fx/z/88/ZWI0Mp6m9ukSQXn0wu698Q/py6vGXx5FQARaWmPX1p3Ov9kSJLKE5keOfLr2bk1+0UE1YqDsVzfxZ4NvUNdm/fp2tdJbMVTejdan3j6oj9oxX6QTvd1bjygXX2MzKJlRO4rS3Zt6bC1Qq4lgDP2U1L4uEOn8ihdoz2bh6hOdTpOqYk7255nsuvXK6XnSIS4MvnFT5cGM+GS80G2Y2G4Mrsi0EWUDvGJYfzmRDQ2Xj4ZKNG9y3dea1NKgTTEKEXx1a1VheKV4e7th5WYEZT7zuvhKkE975S11Tfvy6eO3fhwO8BKhDfp+HsOZ1KgsygVMjP1kKW7jyuTzxEEnUw8snRsGGB130E3eXfft6NnPtwG0CRKizc40454jat9ZubHfbz5gUpNkUp3M/6gjursYXHXKKRMuw5k+b8BoyTj7QymDmJqJJUyYe8JurauBaBtwSBbBpqzUcF8cDpoAhJNMK+H+ev6AQ8iCB5vprDFe4grIbaE2DLiqmSWnYW4mZ2ARERchK+PNh67CmKL+KSAuBLY4my9jLgaSAzJnIwQI+ItPvnZ6ORKiC3O3guzncv/ACIW4rkAI6JwiP09Kyw2bbsSYitNsY8a37RzAGJ8wdZ/dSTV9hAfapE28CHIIsTFgEF041Ta4aJIxPi4CYjiC+8vH+pD2Isi/G+mBVCPDV6u/y39AQ7XjBmT8uenAAAAAElFTkSuQmCC"
}, {
    "link": "https://wikia.com/nisl/nunc/nisl/duis.js?dis=lectus&parturient=pellentesque&montes=at&nascetur=nulla&ridiculus=suspendisse&mus=potenti&vivamus=cras&vestibulum=in&sagittis=purus&sapien=eu&cum=magna&sociis=vulputate&natoque=luctus&penatibus=cum&et=sociis&magnis=natoque&dis=penatibus&parturient=et&montes=magnis&nascetur=dis&ridiculus=parturient&mus=montes&etiam=nascetur&vel=ridiculus&augue=mus&vestibulum=vivamus&rutrum=vestibulum&rutrum=sagittis&neque=sapien&aenean=cum",
    "target": "_self",
    "date": "7/22/2024",
    "title": "Honorable",
    "time": "12:50 PM",
    "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    "location": "Suite 13",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGWSURBVDjLpZG9S5thFMXPG2NUxE8oxFAtKFnyLwiCHaxOnToodmoVh0qJFBVcRXQLuOhWLLQoWtsIfkCzmNLioA52EYz64mBKFAJKCXnuuU8HWykaS3i92z3Dj/O717HW4j7juxm8+TZQMvS1f9QzgNRZUnuKBTj/KkSTfbGG8tBrVYWbdUEqKMzQcFuEGzRc+tD76aQgILrZNx6sCI01V7XAcQBahaoiJzlkf2WRzv5E6jT1mUamlvvXv99SIDVAEgqFKEESYgU+x4fyQBnCwTAiDyNPjZGRzlh7Y0GFgbXn08HKhlck4Z65ECFC1SE0PXiEUn8AqsRe6gcO3IPol+Fk7NYRZ7reDbrn7tvjjLs392zRed+97Bymj2KJncTJZe4SF/kL1FbXwhh5cucXxMhLMTL/d//4YjVq8rK0f7wPv68UdTX1kLx0FlT43zyebLUdbR2gKuKrcWxN7DoA4C/23yYvMBSoVYjhdV40QIxAlLCWECNeAAT1TwPx2ICWoCroTYFXCqqglwYUIr6wAlKh1Ov8N9v2/gMRLRuAAAAAAElFTkSuQmCC"
}, {
    "link": "https://instagram.com/est/congue/elementum/in/hac.html?mauris=massa&eget=id&massa=lobortis&tempor=convallis&convallis=tortor&nulla=risus&neque=dapibus",
    "target": "_blank",
    "date": "7/22/2024",
    "title": "Dr",
    "time": "4:30 PM",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "location": "Room 446",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKnSURBVDjLpVPfS5NhFN6/0F1EF9FFBf28GhF0UWrkVQQZkamgbckoGEUsbVJgLl2K++F0bcx0UwZT07bZnG6yzc3hJND56ZYr59zELjSdm36NTZ6+9yOEQQyii8MLh/M857zPeQ4HAOd/4p8BBoMB3d3d0Gg0UKlUDzg+nw8kpqam4HK54HQ6MT4+DpvNBovFguHhYQwMDMBoNEKv17O12WwWiUQCMpmM4ni9XuRyOWQymYKRSqWg0+nWk8kkwuEw2tvbo1KpVMDxeDxsIh6Pw+/3IxaLgeSi0SgmJiYQiURgtVrZmsHBQVAUxU7U0tJSdKiBw+HA9PQ0RkdHuW63G0NDQ1wC7uvr45JvaLVaLgH7jbdE4f57iHxqwpzuBuZVZytZgrGxMQSDQVaDlZUVVgPSmYBDoRDb+WtAhY1JEXaCViC1ju0gQ9h688ehuiMjI0in07Db7WCU5prNZqI0l4wbMBXVbVKvkImbseF6h/2Fj8iterHwgU8fEjCF4kAggOXlZRAw6WwymRCe1WOLEuNg34v974+xFXiCkKEGQW3FZkBx+1Tejnt7e4nSUKvVUCqV6FcL8XOhDge0H3vfqkCvlWN3qR6LnSX40lZ8qaCRbG+O3t2YFf0BV4KO3UeSeomQshiS5zXbeU7s6ek5zSj9vqurCwqFAhrpI1C2Z8zYHtDRGvxaq8AOM0moowTh1ssnBAJBOo+AEUtMXrlcLlQ2VGwufq7HvE2GxEwZ9qLl2Jp7gSVlUarhKS/BgIV8Pp/OI2A8LWZsya7LRPyxu4qw5g4m64/Bpy6F/fUVGDqbWRsztaiuro789ZgkEgkaeeeQ8XcgMyPHTNM1mB4eT9nrLlysra0V8ng8AkbBayy7eoR+W3Um62wuzTrarrstovMnC13nb3Lp9V3T7PhSAAAAAElFTkSuQmCC"
}, {
    "link": "http://wikia.com/ipsum/primis/in/faucibus/orci.jsp?egestas=quis&metus=libero&aenean=nullam&fermentum=sit&donec=amet&ut=turpis&mauris=elementum&eget=ligula&massa=vehicula&tempor=consequat&convallis=morbi&nulla=a&neque=ipsum&libero=integer&convallis=a&eget=nibh&eleifend=in&luctus=quis&ultricies=justo&eu=maecenas&nibh=rhoncus&quisque=aliquam&id=lacus&justo=morbi&sit=quis&amet=tortor&sapien=id&dignissim=nulla&vestibulum=ultrices&vestibulum=aliquet&ante=maecenas&ipsum=leo&primis=odio&in=condimentum&faucibus=id&orci=luctus&luctus=nec&et=molestie&ultrices=sed&posuere=justo&cubilia=pellentesque&curae=viverra&nulla=pede&dapibus=ac&dolor=diam&vel=cras&est=pellentesque&donec=volutpat&odio=dui&justo=maecenas&sollicitudin=tristique&ut=est&suscipit=et&a=tempus&feugiat=semper&et=est&eros=quam&vestibulum=pharetra&ac=magna&est=ac&lacinia=consequat&nisi=metus&venenatis=sapien&tristique=ut&fusce=nunc&congue=vestibulum&diam=ante&id=ipsum&ornare=primis&imperdiet=in&sapien=faucibus&urna=orci&pretium=luctus&nisl=et&ut=ultrices&volutpat=posuere&sapien=cubilia&arcu=curae&sed=mauris&augue=viverra&aliquam=diam&erat=vitae&volutpat=quam&in=suspendisse&congue=potenti&etiam=nullam&justo=porttitor&etiam=lacus&pretium=at&iaculis=turpis&justo=donec&in=posuere&hac=metus&habitasse=vitae&platea=ipsum&dictumst=aliquam&etiam=non&faucibus=mauris",
    "target": "_self",
    "date": "7/22/2024",
    "title": "Dr",
    "time": "4:42 PM",
    "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    "location": "Room 812",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAEkSURBVCjPbdE9S0IBGIbhxxobWxP8D8r5I60RLg0NNTS21VBRQwg1aA4VOAWBpBVCFhKUtkVJtPQx9GFFWh49x3P0bvAjjsWzXrzvcAtpREEZfQtoACEkpKBVdpouv7NYi3SJkAynWcXExKTCJ6+4PLPeIZJPhksdmzp1vilTwqVGlWhEgR6wsbGpU+OLt94rGfJ1gIOLi4OFSYV3Sjx5QXdtkiHFx//gjiwlTshyT5LV3T8gwy3HFLnhkCuWmB3qA0Uu2WGOZVIUmN/ru5CiwAsLNLCI8cg+i3hAggMeiNOgwQbXRJnwghoX5DkiTow0OcLJ8HAbtLpkkzwJCuTY4pQppgeFFLJNtxMrzSRFtlnhvDXO6Fk7ll8hb+wZxpChoPzoB6aiXIYcSLDWAAAAAElFTkSuQmCC"
}, {
    "link": "http://fema.gov/amet/sapien/dignissim.jpg?quisque=curae&id=mauris&justo=viverra&sit=diam&amet=vitae&sapien=quam&dignissim=suspendisse&vestibulum=potenti&vestibulum=nullam&ante=porttitor&ipsum=lacus&primis=at&in=turpis&faucibus=donec&orci=posuere&luctus=metus&et=vitae&ultrices=ipsum&posuere=aliquam&cubilia=non&curae=mauris&nulla=morbi&dapibus=non&dolor=lectus&vel=aliquam&est=sit&donec=amet&odio=diam&justo=in&sollicitudin=magna&ut=bibendum&suscipit=imperdiet&a=nullam&feugiat=orci&et=pede&eros=venenatis&vestibulum=non&ac=sodales&est=sed&lacinia=tincidunt&nisi=eu&venenatis=felis&tristique=fusce&fusce=posuere&congue=felis&diam=sed&id=lacus&ornare=morbi&imperdiet=sem&sapien=mauris&urna=laoreet&pretium=ut&nisl=rhoncus&ut=aliquet&volutpat=pulvinar&sapien=sed&arcu=nisl&sed=nunc&augue=rhoncus&aliquam=dui&erat=vel&volutpat=sem&in=sed&congue=sagittis&etiam=nam&justo=congue&etiam=risus&pretium=semper&iaculis=porta&justo=volutpat&in=quam&hac=pede&habitasse=lobortis&platea=ligula&dictumst=sit&etiam=amet&faucibus=eleifend&cursus=pede&urna=libero&ut=quis&tellus=orci&nulla=nullam&ut=molestie&erat=nibh&id=in&mauris=lectus&vulputate=pellentesque&elementum=at&nullam=nulla&varius=suspendisse&nulla=potenti&facilisi=cras",
    "target": "_parent",
    "date": "7/22/2024",
    "title": "Honorable",
    "time": "2:43 AM",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "location": "Apt 76",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVDjLpVLfS1NhGPYP8D6im8DKwrYhUaa1tEyyIXlRWtFFJlZQERIGUZKGI5dO7ZeUEl1YaKUYkyU1J0hE/ppzuOnUDbdpbp7Nue2crZ2J9fSeQ4LhdtUHLx/fx/c87/M+z5cEIOl/6p/DsjGnzWfIhnf0CJjhw2AGD2HpWxY8Xw/CPXAAi/378aNvHxY+p7viEhD416q/FTFfC2JLL8AvPkd0/gl+OhoRsdXDN1gsgLm4CghcE5opw6qvFeHpfHDm4wgZsxEcykLEroZ/tFQAryUcwTsij8WYZ4i6boGz5IE1HkWQxojY6xAwlZN0OVyfZClxCbzD8jMBywXEvC0IT50AazqG4Kgc3ORNcNYqeAYUcGllioQmklnhiKsavLsR3EQuQmPZCAxmitK9388RWFqRMAUCZyyPFSLGvKSOCoTG8xAcycEKOR+eeSSAfzs1e3lHdxo/17WHt79P5W3tO/nZNymMSEAxMezsbepO8y+Q484Gce6IrQ5hqwqsWUmkVQgaKhEYvosFbT4IHJl+vV30I4kyDlLGPGXMU8Y8Oc3P98p4zvoQvl4ZlvWkyliNro4iVDQX40pjIc4rc9iTd6SVm/7Bejl7JAMrhnKwEzUEvo/2tlN40HkJWkszTG4dmvqu4WyTBBnXt6rjEjg+ponSPf1FmPsgxUVV7prG/BiaqacQllp/GU36qwJBNB543KMvhFtXAHvHLr/t7Y4tBffS0Wt5hY2rZ6JZINgETnZ0SzDXmQZyum79PvPGtmi9rhS1uhIRXPulJL4CimmSYmIInLzxnh4qT6t3o0FXJnYWduG8yQP7u9SMRB+GHquoWEH2310l3P8B4M3c7jDaDNsAAAAASUVORK5CYII="
}, {
    "link": "https://squidoo.com/pede/lobortis/ligula/sit.xml?at=duis&lorem=bibendum&integer=morbi&tincidunt=non&ante=quam&vel=nec&ipsum=dui&praesent=luctus&blandit=rutrum&lacinia=nulla&erat=tellus&vestibulum=in&sed=sagittis&magna=dui&at=vel&nunc=nisl&commodo=duis&placerat=ac&praesent=nibh&blandit=fusce&nam=lacus&nulla=purus&integer=aliquet&pede=at&justo=feugiat&lacinia=non&eget=pretium&tincidunt=quis&eget=lectus&tempus=suspendisse&vel=potenti&pede=in&morbi=eleifend&porttitor=quam&lorem=a&id=odio&ligula=in&suspendisse=hac&ornare=habitasse&consequat=platea&lectus=dictumst&in=maecenas&est=ut&risus=massa&auctor=quis&sed=augue&tristique=luctus&in=tincidunt&tempus=nulla&sit=mollis&amet=molestie&sem=lorem&fusce=quisque&consequat=ut&nulla=erat&nisl=curabitur&nunc=gravida&nisl=nisi&duis=at&bibendum=nibh&felis=in&sed=hac&interdum=habitasse&venenatis=platea",
    "target": "_top",
    "date": "7/22/2024",
    "title": "Rev",
    "time": "12:50 AM",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "location": "PO Box 55094",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJfSURBVDjLpVNNiFJRFD6O4j8EMpoMTGU6LUbCMJAmmFzYQpjViIgkSNtoldDOzUCbCIJA2rlpNv4thiCY5dSmNJOiYhwRJ8nIMdT8/3nq7ZxH7/GaoE33cbjn3ne+737nnHtljDH4n6E4vZFMJg04RZB4C2cLznK0MtoLXD8JhUI/pPEyqQIEb2s0ml2n06kzGo2gVCr5/clkAo1GA/L5/KDf798Oh8MZEUQEZIlEwp3NZtlgMGAcx7HhcMja7TZrtVqs2+2y8XjMEMxisRgLBoNeAbdEJAjWa7XaXbvdDnK5HHq9HiABIBFMp1NAIDSbTcjlclCtVmGxWDwNBAJ6wi79FhJxOByrKpUKUAEFwHw+503w0+k0RKNR0Ol0YDAYqDb3RQIM8ppMJj5XCp7NZiIB+ZlMhurD+6VSCfR6Pcn3igS4cNHpo9FIBApGJwtgUnN4eAgUi75LbKPQCalsMjo5lUrx/4V9wRcwAkEOT9+gtlEaUrBARgD7nYsglylg+GlIsJy0Bvv1eh3UarUom8DSVOx3rWBZs8DKeTN8t/Gd2JfW4HGhUPhKLSuXy2LOvGz8Lt9bgwuWc2BdRhKTFZbNBhhutm+5H1xTijcxHo+7O53OQa1WA7wTUCwWoVKpgC28CiqTAs6eMYNt5RJM51M4/vYF8u/fjicT7uUfV9nv92/j+hn2WU/9ppqQClJWXT8Cz1UPT3Dw+hWcnDQ28g8/vJGdfo0+n8+AexF0tzDPdfRH6B+Pbvy84rl+E7g5B3vP9+Ddo4+yvx7Tv8bmjouhZODGdL05+Bw74gl+AetZvIbkaCwtAAAAAElFTkSuQmCC"
}, {
    "link": "http://infoseek.co.jp/dapibus.aspx?fusce=suspendisse&consequat=accumsan&nulla=tortor&nisl=quis&nunc=turpis&nisl=sed&duis=ante&bibendum=vivamus&felis=tortor&sed=duis&interdum=mattis&venenatis=egestas&turpis=metus&enim=aenean&blandit=fermentum&mi=donec&in=ut&porttitor=mauris&pede=eget&justo=massa&eu=tempor&massa=convallis&donec=nulla&dapibus=neque&duis=libero&at=convallis&velit=eget&eu=eleifend&est=luctus&congue=ultricies&elementum=eu&in=nibh&hac=quisque&habitasse=id&platea=justo&dictumst=sit&morbi=amet&vestibulum=sapien&velit=dignissim&id=vestibulum&pretium=vestibulum&iaculis=ante&diam=ipsum&erat=primis&fermentum=in&justo=faucibus&nec=orci&condimentum=luctus&neque=et&sapien=ultrices&placerat=posuere&ante=cubilia&nulla=curae",
    "target": "_parent",
    "date": "7/22/2024",
    "title": "Dr",
    "time": "2:47 PM",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "location": "4th Floor",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAG5SURBVDjLpdHNa9MAGMfx/BtBvO/i26XBw0DEocLUSift2Lp2LupYFh2CVLA6rIMVmqaiqxDZxaJQNehSspCksdYXRNGJzOKmNz0IDpRSvH+9SBVEaNgDD8/hgQ8Pv0cAhM30fxfl5k8KfpvZ2gYz1S+EBgpem1etNk9XfpBeXA8PXFz6RvP1d9xnGxwtvg0PqLc/kzLWiGor7L30PDyw6RABwXEcLMuiJ6DRaBAEAZ7nYds2pmlSqVQwDANd18nlcmQyGVRVRZZl/gFc16XXs5PJJKEzOLMwnD29kOic1I8wPLenc/D89iwgCDNPJlAfp5l6NMZkfaQrp5aHSFiHiN7bT8I4wOX749itMu+++pTqU8RL29hxbivCdCOF9cnk4ce7TLjxLhBfGuTGGx3t5RVG8/uw3l/F+nANAC04QSk4RWRaRJisj/JgvYq5dofU8lAXOFwdIP9ilmzzLIMXduG0Fvm7aqtlJEVEkN0E484xxuwYI7VoFxi41U//zQiR6zvZrW6h4B9n3k8DMO+l/1zQS4CSIs7FtD6KvkxttUzRl4lpfUiKqPX8BUkR85IidiRF5PfMA8IvzWTWMhb2/CMAAAAASUVORK5CYII="
}, {
    "link": "http://ocn.ne.jp/odio/odio/elementum/eu/interdum/eu/tincidunt.json?velit=ac&nec=est&nisi=lacinia&vulputate=nisi&nonummy=venenatis&maecenas=tristique&tincidunt=fusce&lacus=congue",
    "target": "_top",
    "date": "7/22/2024",
    "title": "Mr",
    "time": "12:30 AM",
    "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    "location": "15th Floor",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHiSURBVDjLpZPLquJAEIbPQ+Wd8gAZnTirPIGIgiLoxo2iCxeuBJGgoggq3trLwoX3a9R4QVGxpv/mJCJzOMMwDUVCur+/qv7qfBDRx//EHx/6/b7U6/W0brerdzodgzFmtFotvdlsavV6XfpWgMMyh9l6vabz+UyPx0PE6XSixWJBtVqNVSoV+UuBT9i8Xq+EhefhcCDTNOlyuYhvEC2Xy2apVJLfBD7LZha82+1ou91SPp8nwzBos9kQqrJEdF1n2WxWsgV4v5p1wIIBOp0/KZfLCXi5XIrAGgwGlEqlNFuAm6VDGaUCtLI6HE4RPKOA4QP8QIJEIqHbAu1224BZ+/1ewMi4Wq047BDhcv2iarVKs9lMCN1uN4pGo4YtwMckBFC+BeMgYFV1kaL8EHvT6dSuIhKJvAQajYYOx9GG1SsOqqr6Bk8mEzGZ4XBI4XD41QKfr4bN5/MpwPl8LspVFEXA2BuPxzQajeh+v1OxWKRgMPgykc9VKhQKDB5gIRsCsAUiKxLgncOMh/R2kTKZjJxOp024j4PH49GuBpcJmSHCQdPn88lfXuVkMinH43HGWxItwBP0jLljlBxkHo9H/vZnisViUigU0gKBgO73+w2v12twSHe73Rp/l/76N/5r/AZGRj/URbdFDAAAAABJRU5ErkJggg=="
}, {
    "link": "http://taobao.com/ipsum/primis/in.aspx?potenti=eu&cras=felis&in=fusce&purus=posuere&eu=felis&magna=sed&vulputate=lacus&luctus=morbi&cum=sem&sociis=mauris&natoque=laoreet&penatibus=ut&et=rhoncus&magnis=aliquet&dis=pulvinar&parturient=sed&montes=nisl&nascetur=nunc&ridiculus=rhoncus",
    "target": "_blank",
    "date": "7/22/2024",
    "title": "Mrs",
    "time": "9:20 PM",
    "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    "location": "Room 1209",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKfSURBVDjLpZPrS1NhHMf9O3bOdmwDCWREIYKEUHsVJBI7mg3FvCxL09290jZj2EyLMnJexkgpLbPUanNOberU5taUMnHZUULMvelCtWF0sW/n7MVMEiN64AsPD8/n83uucQDi/id/DBT4Dolypw/qsz0pTMbj/WHpiDgsdSUyUmeiPt2+V7SrIM+bSss8ySGdR4abQQv6lrui6VxsRonrGCS9VEjSQ9E7CtiqdOZ4UuTqnBHO1X7YXl6Daa4yGq7vWO1D40wVDtj4kWQbn94myPGkCDPdSesczE2sCZShwl8CzcwZ6NiUs6n2nYX99T1cnKqA2EKui6+TwphA5k4yqMayopU5mANV3lNQTBdCMVUA9VQh3GuDMHiVcLCS3J4jSLhCGmKCjBEx0xlshjXYhApfMZRP5CyYD+UkG08+xt+4wLVQZA1tzxthm2tEfD3JxARH7QkbD1ZuozaggdZbxK5kAIsf5qGaKMTY2lAU/rH5HW3PLsEwUYy+YCcERmIjJpDcpzb6l7th9KtQ69fi09ePUej9l7cx2DJbD7UrG3r3afQHOyCo+V3QQzE35pvQvnAZukk5zL5qRL59jsKbPzdheXoBZc4saFhBS6AO7V4zqCpiawuptwQG+UAa7Ct3UT0hh9p9EnXT5Vh6t4C22QaUDh6HwnECOmcO7K+6kW49DKqS2DrEZCtfuI+9GrNHg4fMHVSO5kE7nAPVkAxKBxcOzsajpS4Yh4ohUPPWKTUh3PaQEptIOr6BiJjcZXCwktaAGfrRIpwblqOV3YKdhfXOIvBLeREWpnd8ynsaSJoyESFphwTtfjN6X1jRO2+FxWtCWksqBApeiFIR9K6fiTpPiigDoadqCEag5YUFKl6Yrciw0VOlhOivv/Ff8wtn0KzlebrUYwAAAABJRU5ErkJggg=="
}, {
    "link": "https://1und1.de/erat/id/mauris/vulputate/elementum/nullam.html?a=vestibulum&libero=ante&nam=ipsum&dui=primis&proin=in&leo=faucibus&odio=orci&porttitor=luctus&id=et&consequat=ultrices&in=posuere&consequat=cubilia&ut=curae&nulla=mauris&sed=viverra&accumsan=diam&felis=vitae&ut=quam&at=suspendisse&dolor=potenti&quis=nullam&odio=porttitor&consequat=lacus&varius=at&integer=turpis&ac=donec&leo=posuere&pellentesque=metus&ultrices=vitae&mattis=ipsum&odio=aliquam&donec=non&vitae=mauris&nisi=morbi&nam=non",
    "target": "_blank",
    "date": "7/22/2024",
    "title": "Mrs",
    "time": "2:39 AM",
    "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    "location": "10th Floor",
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAITSURBVDjLpZNNSJRBGMd/s7q50ZoWISZSRAgF5VpELFJ0CK9RneokEl1qO3URpFNCXqIO0aFLEF0iiAj6JBB0WYwOoikRJiXUYqbsumv7zvu+M/N02BV30YPgc5h5GPh/zMz/USLCVirCFqt+tZGfb8UUFxEJEBMiNkRMgBgfsT6EGms0YjwINU0Xn6haAmuIHrm0TkEEFFQWQCD3/PJ6B37+N9tFEOeVDxSIOEAhrDGoSAMSehtcwRhcMI8pfgLnIxKUdxeA04jTiPPYtucCLixtQGB9wCBOg4QVUDVYI64EYpBgAwdmZalsuUbZwzldIfHAeWUR8289gbMaPTOK8b+DDUAMVheI7W8pKzuNWA/E1byBWg3S4oteibZ0EO86DzhcMEdx/BkN+3aBlBie1YzMOZY9j6CU489K/tabOxOD9VVMhAuT5D6m2dl9FaUUTkKQEu+/FZny45w5fYL23R0MT79kbGr0djLV1hyp/u/Gk72E+b/kR+5VwBqxmtdfc3QdSmAjlsTeHqwKSR7tBri+FmWjUXURdhy/gphmiplX1MUSxFr7WCgsEVVxzh2+AcDNs4842NIJEKvKgSb37j5iNBJ6BN4XmM1Q+vyUQiFgOpthIpumv+cxQx/6iNU1AGi1mWlMptoG2w80DXR3nqKj9Rgz8+NkJtP8+rF8V212nJOptiHgGtAIFIGHYw+y/f8B3ntD1Kp2NbQAAAAASUVORK5CYII="
}]

const eventList = MiniReact.createElement(EventList,{
    cards:cards,
})
export default {
    type:"div",
    children:[
        header,
        eventList
    ]
}