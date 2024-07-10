<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Requests\InquiryRequest;
use App\Http\Requests\NewsletterRequest;
use App\Models\Blog;
use App\Models\ContactList;
use App\Models\Downloadable;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //home
    public function index(){
        return view('welcome')->with('title','Home');
    }
    //downloads
    public function downloads(){
        $downloadables = Downloadable::all();
        return view('downloads')->with('title','Downloads')
        ->with(compact('downloadables'));
    }
    //news
    public function news(){
        $blogs = Blog::all();
        return view('news')->with('title','News')
        ->with(compact('blogs'));
    }
    //contact
    public function contact(){
        return view('contact')->with('title','Contact Us');
    }
    //contact
    public function contactLocation($location){
        $contactList = ContactList::where('state', $location)->firstorfail();
        return view('contactLocation')->with('title','Contact Location')
        ->with(compact('contactList'));
    }
}
