import { Subject} from 'rxjs'

const x = new Subject<string>();

x.subscribe((val) => {
  console.log(val);
})

x.next('test');
