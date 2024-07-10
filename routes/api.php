<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{BlogController, DropdownController, ProductManagmentController, RoleController, UserController, ProductController, CategoryController, ContactListController, InquiryController, DownloadableController, DownloadablePdfController, HomeSliderController, NewsletterController, TabController};
use App\Http\Controllers\Auth\ApiAuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', [ApiAuthController::class, 'login']);
    Route::post('/register', [ApiAuthController::class, 'register']);
    Route::put('/updateprofile', [ApiAuthController::class, 'updateprofile']);
});


Route::group(['middleware' => ['cors', 'json.response', 'auth:api']], function () {
	Route::post('/logout', [ApiAuthController::class, 'logout']);
	Route::put('/updateprofile', [ApiAuthController::class, 'updateprofile']);
	Route::get('/categories-parents', [CategoryController::class, 'getParents']);
	Route::get('/categories-childs', [CategoryController::class, 'getChilds']);
	Route::apiResource('roles', RoleController::class);
	Route::apiResource('blogs', BlogController::class);
	Route::apiResource('tabs', TabController::class);
	Route::apiResource('newsletters', NewsletterController::class);
	Route::apiResource('downloadables', DownloadableController::class);
	Route::apiResource('downloadable-pdfs', DownloadablePdfController::class);
	Route::apiResource('home-sliders', HomeSliderController::class);
	Route::apiResource('contact-lists', ContactListController::class);
	Route::apiResource('user', UserController::class);
	Route::apiResource('products', ProductController::class);
	Route::apiResource('categories', CategoryController::class);
	Route::apiResource('inquiries', InquiryController::class);

	Route::apiResource('dropdowns', DropdownController::class);
	Route::get('/getdropdownsvalues', [DropdownController::class, 'getdropdownsvalues']);

	Route::apiResource('productmanagment', ProductManagmentController::class);

	Route::get('/duplicate/products/{product}', [ProductController::class, 'duplicate']);
	Route::post('/deleteall/products', [ProductController::class, 'deleteall']);

	Route::post('/deleteall/inquiries', [InquiryController::class, 'deleteall']);

});
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/me', function (Request $request) {
        $notificationsCount = $request->user()->unreadNotifications()->count();
        $user = $request->user();
        $user->notification_count = $notificationsCount;
        return $user;
    });
});
Route::middleware('auth:api')->get('/notifications', function (Request $request) {
    $notifications = $request->user()->notifications()->paginate(50);
    // $request->user()->notifications()->paginate(50)->markAsRead();
    return $notifications;
});