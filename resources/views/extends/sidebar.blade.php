<div class="col-md-3 col-sm-12 col-xl-2 col-lg-3 col-12">
    <ul class="navbar-nav mr-auto sidenav">
        @foreach($categories as $category)
        <li class="nav-item"><a class="nav-link" href="{{route('category.index', $category->slug)}}">{{$category->name}}</a></li>
        @if($category->children()->count()>0)
            @foreach($category->children as $children)
                <li class="nav-item ml-2 subsubroot_categories"><a class="nav-link" href="{{route('category.index', $children->slug)}}"><i class="far fa-circle"></i>{{$children->name}}</a>
                    @if($children->children()->count()>0)
                    <ul class="nav-second-level">
                        @foreach($children->children as $childrenx)
                            <li class="nav-item"><a class="nav-link" href="{{route('product.index', $childrenx->slug)}}"><i class="fas fa-circle"></i> {{$childrenx->name}}</a></li>
                        @endforeach
                    </ul>
                    @endif
                </li>
            @endforeach
        @endif
        @endforeach
    </ul>
</div>