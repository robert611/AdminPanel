<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index()
    {
        return $this->render('admin/index.html.twig');
    }

    /**
     * @Route("/admin/viewers", name="admin_viewers")
     */
    public function viewers()
    {
        return $this->render('admin/viewers.html.twig');
    }

    
    /**
     * @Route("/admin/users", name="admin_user_index", methods={"GET"})
     */
    public function userIndex()
    {
        return $this->render('admin/users.html.twig');
    }

    /**
     * @Route("/admin/users/{id}", name="admin_user_show", methods={"GET"})
     */
    public function userShow()
    {
        return $this->render('admin/users/show.html.twig');
    }

    /**
     * @Route("/admin/user/{id}/edit", name="admin_user_edit", methods={"GET","POST"})
     */
    public function userEdit()
    {
        return $this->render('admin/users/edit.html.twig');
    }
}
