// import React, { Component } from 'react';
//
// export class StarReview extends Component {
//     constructor(props) {
//         super(props);
//         this.stars = [1,2,3,4,5];
//         this.rating = 0;
//         this.readOnly = false;
//     }
//     render() {
//         const { value, starId } = this.props;
//         return (
//             <fieldset class="rating">
//                 <div>
//                     {this.stars.map((num, index) =>
//                         <div>
//                         <!-- full star -->
//                          <input
//                                id={"star" +starId+"num"}
//                                value={"num"-0.5}
//                                name="starId"
//                                type="radio"
//                                />
//                          <label class="full" for="'star'+starId+num"></label>
//                          <!-- half star -->
//                          <input
//                                 value="num-0.5"
//                                 id="'halfstar'+starId+num"
//                                 name="starId"
//                                 type="radio"
//                                  />
//                          <label class="half" [for]="'halfstar'+starId+num"></label>
//                         </div>
//                     )}
//                 </div>
//             </fieldset>
//         );
//     }
// }
