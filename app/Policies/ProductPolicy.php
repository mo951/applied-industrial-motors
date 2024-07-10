<?php

namespace App\Policies;

use App\Models\Product;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductPolicy
{
  use HandlesAuthorization;

  /**
   * Determine whether the user can view any models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function viewAny(User $user)
  {
    return true;
    return optional($user->permissions()->where('permission_id', 16)->first())->id > 0;
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Product $product)
  {
    return true;
    return optional($user->permissions()->where('permission_id', 17)->first())->id > 0;
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {
    return true;
    return optional($user->permissions()->where('permission_id', 18)->first())->id > 0;
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Product $product)
  {
    return true;
    return optional($user->permissions()->where('permission_id', 19)->first())->id > 0;
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Product $product)
  {
    return true;
    return optional($user->permissions()->where('permission_id', 20)->first())->id > 0;
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Product $product)
  {
    return true;
    return optional($user->permissions()->where('permission_id', 20)->first())->id > 0;
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \App\Models\Product  $product
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Product $product)
  {
    return true;
    return optional($user->permissions()->where('permission_id', 20)->first())->id > 0;
  }
}
