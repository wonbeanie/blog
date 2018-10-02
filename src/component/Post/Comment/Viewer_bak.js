import React, { Component } from 'react';

// import bgImg from 'imgUrl';
class Viewer extends Component {

    constructor(props) {

        super(props);
        
    }

    render() {

        let abc = [
            {
                nickname : "wonbeanie",
                date : "2018-09-13 06:08:12",
                content : "가나다라바ㅓ라아ㅓ리저ㅏㅣㅏㅓㄹㄴ이ㅏ러키타첲",
            },
            {
                nickname : "wonbeanie",
                date : "2018-09-13 06:08:12",
                content : "가나다라바ㅓ라아ㅓ리저ㅏㅣㅏㅓㄹㄴ이ㅏ러키타첲",
            },
            {
                nickname : "wonbeanie",
                date : "2018-09-13 06:08:12",
                content : "가나다라바ㅓ라아ㅓ리저ㅏㅣㅏㅓㄹㄴ이ㅏ러키타첲",
            },
            {
                nickname : "wonbeanie",
                date : "2018-09-13 06:08:12",
                content : "가나다라바ㅓ라아ㅓ리저ㅏㅣㅏㅓㄹㄴ이ㅏ러키타첲",
            },
            {
                nickname : "wonbeanie",
                date : "2018-09-13 06:08:12",
                content : "가나다라바ㅓ라아ㅓ리저ㅏㅣㅏㅓㄹㄴ이ㅏ러키타첲",
            },
            {
                nickname : "wonbeanie",
                date : "2018-09-13 06:08:12",
                content : "가나다라바ㅓ라아ㅓ리저ㅏㅣㅏㅓㄹㄴ이ㅏ러키타첲",
            },
            {
                nickname : "wonbeanie",
                date : "2018-09-13 06:08:12",
                content : "가나다라바ㅓ라아ㅓ리저ㅏㅣㅏㅓㄹㄴ이ㅏ러키타첲",
            },
        ]

        return (
            <div>
                {/* 답변 작성중인 댓글 */}
                <div class="media-area">
                    {/* <div class="media">
                        <div class="media-body">
                            <h4 class="media-heading">Tina Andrew <small>&middot; 7 minutes ago</small></h4>
                            <h6 class="text-muted"></h6>

                            <p>Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>
                            <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>

                            <div class="media-footer">
                                <a href="#pablo" class="btn btn-primary btn-simple pull-right" rel="tooltip" title="Reply to Comment">
                                    <i class="material-icons">reply</i> Reply
                                </a>
                                <a href="#pablo" class="btn btn-danger btn-simple pull-right">
                                    <i class="material-icons">favorite</i> 243
                                </a>
                            </div>

                            답변 작성중
                            <div class="media media-post">
                                <div class="media-body">
                                    <div class="col-md-1 col-xs-2 replying-icon"></div>
                                    <div className="col-md-11 col-xs-10 replaying-content">
                                        <form class="form">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Your Name"/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" placeholder="Your email"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <textarea class="form-control" placeholder="Write some nice stuff or nothing..." rows="6"></textarea>
                                            <div class="media-footer">
                                                <a href="#pablo" class="btn btn-primary pull-right">Post Comment</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* 답변이 있는 댓글 */}
                    {/* <div class="media">
                        <div class="media-body">
                            <h4 class="media-heading">John Camber <small>&middot; Yesterday</small></h4>

                            <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                            <p> Don't forget, You're Awesome!</p>

                        <div class="media-footer">
                            <a href="#pablo" class="btn btn-primary btn-simple pull-right" rel="tooltip" title="Reply to Comment">
                                <i class="material-icons">reply</i> Reply
                            </a>
                            <a href="#pablo" class="btn btn-default btn-simple pull-right">
                                <i class="material-icons">favorite</i> 25
                            </a>
                            </div>

                            답변
                            <div class="media">
                                <div class="media-body">
                                <div class="col-md-1 col-xs-2 reply-icon"></div>
                                <div className="col-md-11 col-xs-10 reply-content">
                                    <h4 class="media-heading">Tina Andrew <small>&middot; 2 Days Ago</small></h4>

                                    <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                                    <p> Don't forget, You're Awesome!</p>

                                    <div class="media-footer">
                                        <a href="#pablo" class="btn btn-primary btn-simple pull-right" rel="tooltip" title="Reply to Comment">
                                            <i class="material-icons">reply</i> Reply
                                        </a>
                                        <a href="#pablo" class="btn btn-danger btn-simple pull-right">
                                            <i class="material-icons">favorite</i> 243
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* 답변이없는 댓글 */}
                    <div class="media">
                        <div class="media-body">
                            <h4 class="media-heading">Rosa Thompson <small>&middot; 2 Days Ago</small></h4>

                            <p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                            <p> Don't forget, You're Awesome!</p>

                            <div class="media-footer">
                                <a href="#pablo" class="btn btn-primary btn-simple pull-right" rel="tooltip" title="Reply to Comment">
                                    <i class="material-icons">reply</i> Reply
                                </a>
                                <a href="#pablo" class="btn btn-danger btn-simple pull-right">
                                    <i class="material-icons">favorite</i> 243
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 댓글페이지 버튼 */}
                    {/* <div class="pagination-area text-center">
                        <ul class="pagination">
                            <li><a href="#pablo">&laquo;</a></li>
                            <li><a href="#pablo">1</a></li>
                            <li><a href="#pablo">2</a></li>
                            <li class="active"><a href="#pablo">3</a></li>
                            <li><a href="#pablo">4</a></li>
                            <li><a href="#pablo">5</a></li>
                            <li><a href="#pablo">&raquo;</a></li>
                            </ul>
                    </div> */}

                    {/* 댓글 작성 */}
                    {/* <div class="media media-post">
                        <div class="media-body">
                            <form class="form">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Your email"/>
                                        </div>
                                    </div>
                                </div>
                                <textarea class="form-control" placeholder="Write some nice stuff or nothing..." rows="6"></textarea>
                                <div class="media-footer">
                                    <a href="#pablo" class="btn btn-primary pull-right">Post Comment</a>
                                </div>
                            </form>
                        </div>
                    </div> */}

                </div>
            </div>
        )
    }
}

export default Viewer;